import React, { useEffect, useState } from 'react'
import { getData } from '../services/api'
import Loader from './shared/Loader';

export default function Landing() {

    const [data , setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setData(data)

        }
        fetchData();
    } , [])
  return (
    <>
      <input type="text" placeholder='Search' />
        {
          data.length ? 
          data.map(coin => <p key={coin.id}>{coin.symbol}</p>) :
            <Loader />      
        }
    </>
  )
}
