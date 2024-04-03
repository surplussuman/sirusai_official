import React from 'react'
import Slider from 'react-slick';
import deshbaghat1 from '../../Photos/deshbaghat1.jpg'
import deshbaghat2 from '../../Photos/deshbhagat2.jpg'

export default function EventDescriprition3() {
    var settings = {
		dots: true,
		// infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000
	  };
  return (

  
   
  <div>
  
   
  <div className="container ">
      <h2 className='visit'>Startup Punjab at Desh Bhagat Singh University</h2>
  <Slider {...settings}>
      
      <div className='slider-image'>
          <div className='slide'>
      <img src={deshbaghat1}/>
      </div>
  </div>
  <div className='slider-image'>
  <div className='slide'>
  <img src={deshbaghat2}/>
      </div>
      </div>
  
  

  </Slider>
  <div className='container '>
      <div className='event-intro'style={{marginTop: 2 + 'rem',textAlign:'justify'}}>
     <p> "Proud to have secured the first position at the Desh Bhagat Singh University event organized by Startup Punjab. 🏆 It was an incredible experience, and I'm grateful for the opportunity to showcase my skills and innovation. Thanks to everyone who supported me on this journey. This is just the beginning! 🚀</p>
      </div>
      </div>
  </div>
  </div>
   
  )
}
