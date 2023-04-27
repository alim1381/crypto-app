import React, { useEffect, useState } from 'react'
import { getData } from '../services/api'

export default function Landing() {

    const [data , setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setData(data)

        }
        fetchData();
    } , [])
  return (
    <div>

        {data && <img src={data[0].image} alt='aks' />}
    </div>
  )
}
