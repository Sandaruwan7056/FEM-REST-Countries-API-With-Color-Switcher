import React from 'react'
import { Link } from 'react-router'

const CountryCard = ({ country}) => {
  return (
    <Link to={`/details/${country.name.common}`} className= ' dark:bg-dark-blue bg-white shadow-md rounded-md  w-2xs cursor-pointer'>

      <img src={country.flags.png} alt={country.name.common  } 
      width={320}
      height={213}
      loading="lazy"
      className=' rounded-t-md  aspect-[320/213] h-fit w-full object-cover' />

      <section className='px-5 py-8 *:dark:text-white'>
        <h1 className='pb-6 font-bold text-very-dark-blue-lm-text '>{country.name.common}</h1>
        <div className='text-Homepage flex flex-col gap-2 *:font-semibold text-start *:text-very-dark-blue-lm-text/70 *:dark:text-white/70 '>
          <p className=''><strong className='font-semibold text-very-dark-blue-lm-text dark:text-white '>Population:</strong>{country.population}</p>
          <p className=''><strong className='font-semibold  text-very-dark-blue-lm-text dark:text-white'>Region:</strong>{country.region}</p>
          <p className=''><strong className='font-semibold  text-very-dark-blue-lm-text dark:text-white'>Capital:</strong>{country.capital}</p>
        </div>
      </section>
    </Link>  
  )
}

export default CountryCard