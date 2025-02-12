import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const DetailsPage = () => {
  const { name } = useParams();
  const [uniqueCountry, setUniqueCountry] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [border, setBorder] = useState("");

  const fetchCountry = async () => {
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (!res.ok) {
        setError("Country Not Found");
      } else {
        const data = await res.json();
        setUniqueCountry(data[0]);
        console.log(uniqueCountry);
      }
    } catch (error) {
      setError("Try again Later");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0,0)
    fetchCountry();
  }, [name]);

  return (
    <main className="dark:bg-very-dark-blue-dm-bg min-h-screen ">
    <section className="wrapper font-main ">
      <button>
        <Link
          to={"/"}
          className="shadow-md bg-white dark:bg-dark-blue dark:text-white/70 text-very-dark-blue-lm-text cursor-pointer px-5 py-1 
      flex gap-x-2  items-center justify-center rounded-sm my-10 text-md"
          aria-label="back "
        >
          <FaArrowLeft /> 
          Back
        </Link>{" "}
      </button>
      {isLoading ? (
        <div className="flex items-center justify-center h-fit ">
          <Loader />
        </div>
      ) : uniqueCountry ? (
        <section className="flex flex-col lg:flex-row gap-20  lg:items-center   ">
          <div className="max-w-[500px] h-[300px] mx-auto ">
            <img
              src={uniqueCountry.flags.svg}
              alt={uniqueCountry.name.common}
              className="w-full h-full  object-cover "
            />
          </div>
          <div className="flex flex-col flex-1 gap-5 ">
            <h1 className="text-very-dark-blue-lm-text text-2xl font-bold dark:text-white">
              {uniqueCountry.name.common}
            </h1>
            <section className="*:text-Homepage *:text-very-dark-blue-lm-text *:font-semibold py-5  dark:*:text-white">
              <div className="columns-[250px] gap-5 *:py-2">
                <p>
                  Native Name :{" "}
                  <span className="font-semivold text-very-dark-blue-lm-text/70 dark:text-white/70">
                    {uniqueCountry.name.nativeName 
                    ? Object.values(uniqueCountry.name.nativeName).map((language)=>
                    language.common)
                    : " No native name"
                    }
                  </span>
                </p>
                <p>
                  Porpulation:{" "}
                  <span className="font-semivold text-very-dark-blue-lm-text/70  dark:text-white/70">
                    {uniqueCountry.population}
                  </span>
                </p>
                <p>
                  Region :{" "}
                  <span className="font-semibold text-very-dark-blue-lm-text/70  dark:text-white/70">
                    {uniqueCountry.region}
                  </span>
                </p>
                <p>
                  Sub Region :
                  <span className="font-semivold text-very-dark-blue-lm-text/70 dark:text-white/70">
                    {uniqueCountry.subregion
                      ? uniqueCountry.subregion
                      : " No Subregion"}
                  </span>
                </p>
                <p>
                  Capital :{" "}
                  <span className="font-semivold text-very-dark-blue-lm-text/70 dark:text-white/70">
                    {uniqueCountry.capital}
                  </span>
                </p>
                <p>
                  Top Level Domain :{" "}
                  <span className="font-semivold text-very-dark-blue-lm-text/70 dark:text-white/70">
                    {uniqueCountry.tld.join(", ")}
                  </span>
                </p>
                <p>
                  Currencies :{" "}
                  <span className="font-semivold text-very-dark-blue-lm-text/70 dark:text-white/70">
                    {uniqueCountry.currencies
                      ? Object.values(uniqueCountry.currencies)
                          .map((currency) => currency.name)
                          .join(",")
                      : "No currencies"}
                  </span>
                </p>
                <p>
                  Languages :{" "}
                  <span className="font-semivold text-very-dark-blue-lm-text/70  dark:text-white/70">
                    {uniqueCountry.languages &&
                      Object.values(uniqueCountry.languages)
                        .map((language) => language)
                        .join(",")}
                  </span>
                </p>
              </div>
            </section>
              <div className="">
                <div className="flex gap-4 items-center flex-wrap font-semibold text-Homepage pb-5 text-very-dark-blue-lm-text dark:text-white/70">
                  Border Countries :
                  {uniqueCountry.borders
                    ? uniqueCountry.borders.map((border, index) => (
                        <button
                          key={index}
                          className="bg-white text-[12px] dark:text-white/70 dark:bg-dark-blue  px-5 py-1 shadow-md cursor-pointer "
                          onClick={(e) => {
                            setBorder(e.target.textContent);
                          }}
                        >
                          {border}
                        </button>
                      ))
                    : "No Border Countries"}
                </div>
              </div>
          </div>
        </section>
      ) : (
        <p>{error}</p>
      )}
    </section>
    </main>
  );
};

export default DetailsPage;
