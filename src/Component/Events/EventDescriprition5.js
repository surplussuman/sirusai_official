import React from 'react'
import Slider from 'react-slick';
import bharatpur1 from '../../Photos/istartbharatpur1.jpg'
import bharatpur2 from '../../Photos/istartbharatpur2.jpg'
import bharatpur3 from '../../Photos/istartbharatpur3.jpg'
export default function EventDescriprition5() {
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
      <h2 className='visit'>Event in SIKAR RAJASTHAN</h2>
  <Slider {...settings}>
      
      <div className='slider-image'>
          <div className='slide'>
      <img src={bharatpur1}/>
      </div>
  </div>
  <div className='slider-image'>
  <div className='slide'>
      <img src={bharatpur2}/>
      </div>
      </div>
  
  <div className='slider-image'>
  <div className='slide'>
      <img src={bharatpur3}/>
      </div>
  </div>
 

  </Slider>
  <div className='container '>
      <div className='event-intro'style={{marginTop: 2 + 'rem',textAlign:'justify'}}>
        <p>"Thrilled to have been a part of the incredible journey with 'iStart at Bharatpur', a visionary mission by the Rajasthan government. And the best part? Securing the first position with our innovation at Sirius AI! 🏆

This journey was not just about competition but about pushing the boundaries of what technology and innovation can achieve. I'm immensely grateful for the opportunity and support from our team, mentors, and the iStart initiative.

A big shoutout to the Rajasthan government for fostering an environment of innovation and entrepreneurship. This win is a testament to the dedication and hard work that went into our project at Sirius AI.</p>
      </div>
      </div>
  </div>
  </div>
    
  )
}
