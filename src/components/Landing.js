import React, { useEffect, useState } from 'react'
import { getData } from '../services/api'
// Components
import Coins from './Coins';
import Loader from './shared/Loader';

export default function Landing() {

    const [data , setData] = useState([]);
    const [search , setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setData(data)

        }
        fetchData();
    } , [])
    const changeHandler = (event) => {
      setSearch(event.target.value)
    }
    const searchCoins = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <input type="text" placeholder='Search' value={search} onChange={changeHandler} />
        {
          data.length ? 
            searchCoins.map(coin => <Coins 
                  key={coin.Landing}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  marketCap={coin.market_cap}
                  priceChange={coin.price_change_percentage_24h}
            />) :
            <Loader />      
        }
    </>
  )
}
