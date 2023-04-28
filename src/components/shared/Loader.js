import React from 'react'

// Gif
import loadingGif from '../../gifs/loader2.gif'

export default function Loader() {
  return (
    <div style={{marginTop : "100px"}}>
        <img src={loadingGif} alt="Loading..." style={{width: "100px"}}/>   
        <h3>Loading...</h3>
    </div>
  )
}
