import React from 'react'
import Slider from 'react-slick';
import sikar1 from '../../Photos/sikar1.jpg'
import sikar5 from '../../Photos/collage.jpg'
import sikar2 from '../../Photos/sikar2.jpg'
import sikar3 from '../../Photos/sikar3.jpg'
import sikar4 from '../../Photos/sikar4.jpg'


export default function EventDescriprition6() {
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
        <h2 className='visit'>Istart Ideathon in SIKAR RAJASTHAN</h2>
	<Slider {...settings}>
        
	    <div className='slider-image'>
            <div className='slide'>
        <img src={sikar1}/>
        </div>
    </div>

    <div className='slider-image'>
    <div className='slide'>
        <img src={sikar5}/>
        </div>
        </div>
    
    <div className='slider-image'>
    <div className='slide'>
        <img src={sikar2}/>
        </div>
        </div>
    
	<div className='slider-image'>
    <div className='slide'>
        <img src={sikar3}/>
        </div>
    </div>
    <div className='slider-image'>
    <div className='slide'>
        <img src={sikar4}/>
        </div>
    </div>



    </Slider>
    <div className='container '>
        <div className='event-intro'style={{marginTop: 2 + 'rem',textAlign:'justify'}}>
        <p>This remarkable achievement underscores our dedication, innovation, and unwavering commitment to making a difference in the startup ecosystem. We are immensely grateful for the support of our incredible team who have been instrumental in our journey.

Our heartfelt thanks go out to the Rajasthan Government and iStart for recognizing our vision and potential. This win not only validates our hard work but also inspires us to reach even greater heights.

As we continue to strive for excellence, we are more determined than ever to transform our ideas into reality, disrupt industries, and contribute to the growth of our great nation. 🇮🇳
</p>
        </div>
        </div>
	</div>
    </div>
  )
}
