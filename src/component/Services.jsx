import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assets/Techno2.jpg";
import img2 from "../assets/carousel.jpg";
import img3 from "../assets/wallpaper_img.jpg";


const Services = () => {
  return (
    <div>
        <Carousel
        infiniteLoop
         autoPlay 
         showStatus={false}
         showArrows={false}
         interval={1000}
         showThumbs={false}
        >
            {/* <div> */}
                <img src = {img1} alt="Item1"/>
                {/* <p className='legend'>Lorem ipsum is the best</p>
            </div> */}
            {/* <div> */}
                <img src = {img2} alt="Item2"/>
                {/* <p className='legend'>Lorem ipsum is the best</p>
            </div> */}
            {/* <div> */}
                <img src = {img3} alt="Item3"/>
                {/* <p className='legend'>Lorem ipsum is the best</p>
            </div> */}
        </Carousel>
    </div>
  )
}

export default Services