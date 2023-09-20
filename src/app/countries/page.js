'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const CountriesPage = () => {
   const { countries } = useSelector((state) => state.countries);
   return (
      <>
         <h1>Countries</h1>
         {countries.map((item) => (
            <p key={item}>{item.name.common}</p>
         ))}
      </>
   );
};

export default CountriesPage;
