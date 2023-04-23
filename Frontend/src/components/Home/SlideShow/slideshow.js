import React from 'react'
// import ImageSlider, { Slide } from "react-auto-image-slider";
import SimpleImageSlider from "react-simple-image-slider";
const slideshow = () => {
  const images = [
    { url: "Images/Slideshow.png" },
    { url: "Images/Slideshow.png" },
    { url: "Images/Slideshow.png" },
    { url: "Images/Slideshow.png" },
    { url: "Images/Slideshow.png" },
    { url: "Images/Slideshow.png" },
    { url: "Images/Slideshow.png" },
  ];
    return (
    
     <div>
<div className='slider'>
      <SimpleImageSlider
        width={1400}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2.5}
  
      />
    </div>
    
    


    </div>
    
  );
}
       

export default slideshow;
