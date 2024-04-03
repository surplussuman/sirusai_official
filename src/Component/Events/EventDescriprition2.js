import React from 'react'
import Slider from 'react-slick';
import codvsta1 from '../../Photos/Codvsta (8).jpg'
import codvsta2 from '../../Photos/Codvsta (9).jpg'
import codvsta3 from '../../Photos/Codvsta (10).jpg'
import codvsta4 from '../../Photos/Codvsta (18).jpg'

export default function EventDescriprition2() {
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
        <h2 className='visit'>Codevista 2.0  at BF School of Entrepreneurship </h2>
	<Slider {...settings}>
        
	    <div className='slider-image'>
            <div className='slide'>
        <img src={codvsta1}/>
        </div>
    </div>
    <div className='slider-image'>
    <div className='slide'>
        <img src={codvsta2}/>
        </div>
        </div>
    
        <div className='slider-image'>
    <div className='slide'>
        <img src={codvsta3}/>
        </div>
        </div>

        <div className='slider-image'>
    <div className='slide'>
        <img src={codvsta4}/>
        </div>
        </div>
    </Slider>
    <div className='container '>
        <div className='event-intro'style={{marginTop: 2 + 'rem',textAlign:'justify'}}>
      <p>  "Delighted to share our recent accomplishment at the event hosted by the School of Entrepreneurship at Baba Farid Group of Institutions, where we proudly secured the first prize! 🏆

This event was a fantastic platform for innovation and creativity, and it was truly an honor to be recognized for our efforts. We immensely thankful for the opportunity and the support we received along the way.</p>
        </div>
        </div>
	</div>
    </div>
  )
}
