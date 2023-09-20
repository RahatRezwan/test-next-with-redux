'use client';

import { fetchWatchData } from '@/redux/features/testSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
   //  const res = await fetch('https://restcountries.com/v3.1/all');
   //  const data = await res.json();
   const { countries } = useSelector((state) => state.countries);
   const dispatch = useDispatch();
   const fetch = () => {
      dispatch(fetchWatchData());
   };
   console.log(countries);
   return (
      <div>
         <button onClick={fetch}>fetch</button>
         <h1 className='text-4xl text-center my-10'>Welcome To Watch Gallery</h1>
         <div className='col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto'></div>
         {countries.map((country) => (
            <p key={country._id}>{country.name.common}</p>
         ))}
      </div>
   );
};

export default HomePage;
