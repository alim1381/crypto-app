import React from 'react'

// Gif
import loadingGif from '../../gifs/loader2.gif'

export default function Loader() {
  return (
    <>
        <img src={loadingGif} alt="Loading..." />   
        <h3>Loading...</h3>
    </>
  )
}
