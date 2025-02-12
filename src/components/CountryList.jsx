import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countryList }) => {
    
  return (
<div className="grid-layout   ">
  {countryList.map((country, index) => (
    <CountryCard key={index} country={country} />
  ))}
</div>
  );
};

export default CountryList;
