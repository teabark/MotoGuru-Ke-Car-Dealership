import React, {useState} from 'react';
import {ArrowBigLeft, ArrowBigRight, CircleDot, Circle} from "lucide-react"


function ImageSlider({imageURLs}) {

  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage(){
    setImageIndex(index => {
      if(index === imageURLs.length - 1 ){ 
        return 0
      } else {
      return index + 1 
      }
    })
  }

  function showPrevImage(){
    setImageIndex(index => {
      if(index === 0){ 
        return imageURLs.length - 1
      } else {
      return index - 1 
      }
    })
  }

  return (
    <div style={{width: "100%", height: "100%", position: "relative"}}>
      <div style={{width: "100%",
         height: "100%", 
         overflow: "hidden", 
         display: "flex",
         }}>
        {imageURLs.map(url => (
              <img key={url} 
              src={url} alt="banner" 
              className='img-slider-img'
              style={{translate: `${-100 * imageIndex}%`}}
              />
        ))}
      </div>

      <button onClick={showPrevImage} className='img-slider-btn' style={{left:0}} aria-label='View Previous Button'><ArrowBigLeft aria-hidden/></button>
      <button onClick={showNextImage} className='img-slider-btn' style={{right:0}} aria-label='View Next Button'><ArrowBigRight aria-hidden/></button>
      <div style={{
        position: "absolute",
        bottom: ".5rem",
        left: "50%",
        translate: "-50%",
        display: "flex",
        gap: ".25rem"
      }}>
        {imageURLs.map((_, index) => (
          <button key={index} className="img-slider-dot-btn" onClick={()=> setImageIndex(index)} aria-label={`View image ${index + 1}`}>{index === imageIndex ? <CircleDot aria-hidden/> : <Circle aria-hidden/> }</button>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider