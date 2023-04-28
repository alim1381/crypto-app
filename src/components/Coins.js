import React from 'react'
import styles from './Coins.module.css'

export default function Coins({name , image , symbol , price , marketCap , priceChange}) {
  return (
    <div className={styles.container}>
        <img src={image} alt="Coin Logo" />
        <span className={styles.name}>{name}</span>
        <span >{symbol.toUpperCase()}</span>
        <span>$ {price.toLocaleString()}</span>
        <span className={priceChange > 0 ? styles.priceChangeGreen : styles.priceChangeRed}>% {priceChange && priceChange.toFixed(2)}</span>
        <span>$ {marketCap.toLocaleString()}</span>
    </div>
  )
}