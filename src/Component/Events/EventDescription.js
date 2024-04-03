import React from 'react'
import Slider from 'react-slick';
import mimit1 from '../../Photos/mimit-paryog.jpg'

export default function EventDescription() {
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
      <h2 className='visit'>Paryog 2.0 at MIMIT </h2>
  <Slider {...settings}>
      
      <div className='slider-image'>
          <div className='slide'>
      <img src={mimit1}/>
      </div>
  </div>
 
  </Slider>
  <div className='container '>
      <div className='event-intro'style={{marginTop: 2 + 'rem',textAlign:'justify'}}>
      <p>🎉 Participated in Paroyg 2.0 organized by Malout Institute of Management and Information Technology and proudly secured the 2nd prize. 🥈

Paroyg 2.0 was a thrilling competition that pushed the boundaries of innovation and creativity, and it's an honor to be recognized. This achievement wouldn't have been possible without the incredible support from my team.

Grateful to the organizers for providing a platform for showcasing talent and innovation. This win motivates me to aim higher and keep pushing the boundaries of what's possible.

The journey doesn't end here – it's just the beginning of more exciting adventures on the horizon! Stay tuned for what's next. 🚀</p>
      </div>
      </div>
  </div>
  </div>
  )
}
