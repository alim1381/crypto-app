import React from 'react'

export default function Coins({name , image , symbol , price , marketCap , priceChange}) {
  return (
    <div>
        <img src={image} alt="Coin Logo" />
        <span>{name}</span>
        <span>{symbol.toUpperCase()}</span>
        <span>{price.toLocaleString()}</span>
        <span>{priceChange}</span>
        <span>{marketCap.toLocaleString()}</span>
    </div>
  )
}