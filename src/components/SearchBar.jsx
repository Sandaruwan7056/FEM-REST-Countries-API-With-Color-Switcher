import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({searchedCountry , setSearchedCountry}) => {
  return (
    <>
    <label htmlFor="searchBar" className='sr-only'>Search the country here</label>
    <div className='max-w-md w-full bg-white dark:bg-dark-blue flex gap-4 px-5 py-3 shadow-md  items-center'>
        <FaSearch className='text-dark-gray-lm-input dark:text-white'/>
    <input 
    type=" text"
     id='searchBar' 
     placeholder='Search For A Country'
     role='search' 
     value={searchedCountry}
     onChange={(e)=>setSearchedCountry(e.target.value)}
    className='w-full outline-none text-dark-gray-lm-input dark:text-white'/>
    </div>
    </>
  )
}

export default SearchBar