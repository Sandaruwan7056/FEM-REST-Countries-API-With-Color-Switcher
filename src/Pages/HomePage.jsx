import React from 'react'
import CountryList from '../components/CountryList'
import FilterByRegion from "../components/FilterByRegion";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const HomePage = () => {
      const [isLoading, setIsLoading] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
      const [countryList, setCountryList] = useState([]);
      const [searchedCountry,setSearchedCountry]=useState('');
      const [region,setRegion]=useState('');
     
      const [debouncedSearchedCountry]=useDebounce(searchedCountry ,500);
    
    
      const fetchCountries = async (name='',region ='') => {
        setErrorMessage("");
        setIsLoading(true);
        try {
          const url = name 
          ? (`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`)  
          : region ?
          (`https://restcountries.com/v3.1/region/${encodeURIComponent(region)}`)
          : ("https://restcountries.com/v3.1/all");
    
          const response = await fetch(url);
             
          if(!response.ok){
            throw new Error('Failed to fetch data')
          }
    
          const data = await response.json();
          setCountryList(data);
        
    
        } catch (error) {
          setErrorMessage(`Couldnt Fetch The Data , try again later`);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchCountries(debouncedSearchedCountry,region);
      }, [debouncedSearchedCountry,region]);
    
  return (
    <main className=' dark:bg-very-dark-blue-dm-bg min-h-screen'>
    <section className="wrapper pt-10">
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between  ">
      <SearchBar searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry} />
      <FilterByRegion setRegion={setRegion}  />
    </section>
    <section className="pt-10 ">
      {isLoading ? (
        <div className="flex justify-center items-center  ">
          <Loader  />
        </div>
      ) : errorMessage ? (
        <p className="text-red-600">{errorMessage}</p>
      ) : (
        <CountryList  countryList={countryList} />
      )
      }
    </section>
  </section>
    </main>
  )
}

export default HomePage