import React from 'react'
import Slider from 'react-slick';
import stbti1 from '../../Photos/stbti1.jpg'
import stbti2 from '../../Photos/stbti2.jpg'
import stbti3 from '../../Photos/stbti3.jpg'
import stbti4 from '../../Photos/stbti4.jpg'
import stbti5 from '../../Photos/stbti5.jpg'
import stbti6 from '../../Photos/stbti6.jpg'
import stbti7 from '../../Photos/stbti7.jpg'
import stbti8 from '../../Photos/stbti8.jpg'
export default function EventDescriprition4() {
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
        <h2 className='visit'>Udyam in Bhatinda Punjab</h2>
	<Slider {...settings}>
        
	    <div className='slider-image'>
            <div className='slide'>
        <img src={stbti1}/>
        </div>
    </div>
    <div className='slider-image'>
    <div className='slide'>
        <img src={stbti2}/>
        </div>
        </div>
    
	<div className='slider-image'>
    <div className='slide'>
        <img src={stbti3}/>
        </div>
    </div>
    <div className='slider-image'>
    <div className='slide'>
        <img src={stbti4}/>
        </div>
    </div>
    <div className='slider-image'>
    <div className='slide'>
        <img src={stbti5}/>
        </div>
    </div>
    <div className='slider-image'>
    <div className='slide'>
        <img src={stbti6}/>
        </div>
    </div><div className='slider-image'>
    <div className='slide'>
        <img src={stbti7}/>
        </div>
    </div><div className='slider-image'>
    <div className='slide'>
        <img src={stbti8}/>
        </div>
    </div>
    </Slider>
    <div className='container '>
        <div className='event-intro'style={{marginTop: 2 + 'rem',textAlign:'justify'}}>
            <p>🏆🎉 We are thrilled to announce that our team has secured the 2nd position in the grand finale round of Udyam (Shore to Shine), organized by the District Bureau of Employment, Bhatinda, Startup Punjab, and Innovation Mission Punjab! 🥈✨

The competition, held on 12/05/23, brought together some of the most innovative startups in the region, and we are honored to have been recognized for our hard work and dedication. We would like to express our sincere gratitude to the organizers for this prestigious award.</p>
        </div>
        </div>
	</div>
    </div>
  )
}
