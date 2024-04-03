import React from 'react'
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { Helmet } from "react-helmet";
import mem1 from '../images/team/suman.jpg'
import mem2 from '../images/team/rishu2.png'
import mem3 from '../images/team/shivam7.png'
import mem4 from '../images/team/shubham3.png'
import mem5 from '../images/team/akhi4.png'
import mem6 from '../images/team/ajay3.png'
import mem7 from '../images/team/nitesh5.png'
import mem8 from '../images/team/sukh3.png'
import mem9 from '../images/team/sanjan4.png'
import mem10 from '../images/team/rohan.png'
import mem11 from '../images/team/rahul.png'
import mem12 from '../images/team/sonu1.png'
import mem13 from '../images/team/alisha2.png'
import mem14 from '../images/team/mishra2.png'
import mem15 from '../images/team/akhilesh1.png'
import mem16 from '../images/team/kunalfinal.png'
import team from "../images/homepage/forabout.jpg"
import dipp from "../images/homepage/dipp.png"


export default function About() {
	const [counter, setCounter] = useState(false);
	const [read1, setread1] = useState(false);
	const [read2, setread2] = useState(false);
	const [read3, setread3] = useState(false);
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
          <Helmet>
          <title>About</title>
        </Helmet>
			{/* Section content part start */}
			<section className="page-title bg-1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center" data-aos="fade-up">
								<span className="text-white">About Us</span>
								<h1 className="text-capitalize mb-4 text-lg">Sirus AI</h1>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* section content part end */}

			{/* Section A part start */}
			<section className="section about-2 position-relative">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">

							<div className="about-item pr-3 mb-5 mb-lg-0" data-aos="fade-up">
								<span className="h6 text-color">What we are</span>
								<h2 className="mt-3 mb-4 position-relative content-title">We work with AI & provide the softwere to User with their Solve daily life problem</h2>
								<p className="mb-5">Predictive Analytics Harness the power of data to make informed decisions.
									Natural Language Processing Understand and leverage text and speech data.
									Computer Vision Unlock insights from visual information.
									Machine Learning Develop intelligent systems for various applications.
									Custom AI Development Tailored solutions for unique needs.
									AI Consulting Expert guidance to shape your AI strategy.
									Data Analytics Extract meaningful insights from your data.
									Ethical AI Practices Prioritize fairness, transparency, and privacy.
								</p>
								<a href="https://forms.gle/EUoRsmnuVJoWDyzeA" target="_blank" className="btn btn-main btn-round-full">Get started</a>

							</div>
						</div>
						<div className="col-lg-6" data-aos="fade-up">
							<div className="about-item-img">
								<img  src={team} alt="about-image" className="img-fluid" style={{width:"100%",height:"100%"}} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="container">
							<img src={dipp} alt="dipp" style={{width:"100%",height:"100%"}}/>
						</div>
			{/* Section A part End */}

			{/* Section B part start */}
			<section className="about-info section pt-0">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
							<div className="about-info-item mb-4 mb-lg-0">
								<input id="ch1" type='checkbox'></input>
								<h3 className="mb-3"><span class="text-color mr-2 text-md ">01.</span>Our Mission</h3>
								<p className='align'>At <b>Sirus ai </b>, our mission is to democratize the benefits
									of artificial intelligence. We are dedicated to pioneering AI-driven solutions that empower
									individuals and organizations to enhance efficiency, drive innovation, and make more informed decisions. </p><p className='para-hide'>
									With a commitment to ethical AI practices, transparency, and responsible data usage, we strive to shape a
									future where AI serves as a force for good,
									transforming industries, enriching lives, and pushing the boundaries of what's possible.</p>
								<label for="ch1" onClick={() => setread1(!read1)}> {read1 ? (<span className='read-more' >read less</span>) : (<span>read more</span>)}
								</label>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
							<div className="about-info-item mb-4 mb-lg-0">
								<input id="ch2" type='checkbox'></input>
								<h3 className="mb-3"><span className="text-color mr-2 text-md">02.</span>Vission</h3>
								<p className='align'>Our vision at <b>Sirus ai </b> is to be at the forefront of AI innovation,
									revolutionizing industries and improving lives worldwide. We aim to create a future where AI technologies
									seamlessly integrate with human endeavors, enhancing productivity, creativity, and decision-making. </p><p className='para-hide'>
									By pushing the boundaries of what AI can achieve and fostering a culture of continuous learning,
									we aspire to be recognized as the leading catalyst
									for positive change in the AI landscape, transforming the way we live, work, and interact with the world..</p>
								<label for="ch2" onClick={() => setread2(!read2)}> {read2 ? (<span className='read-more' >read less</span>) : (<span>read more</span>)}</label>

							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
							<div className="about-info-item mb-4 mb-lg-0">
								<input id="ch3" type='checkbox'></input>
								<h3 className="mb-3"><span className="text-color mr-2 text-md">03.</span>Our Approach</h3>
								<p className='align'>At <b>Sirus ai </b>, our approach to AI is centered on innovation, ethics, and user-centricity.
									We leverage cutting-edge AI technologies to develop solutions that are practical, efficient, and tailored to our
									clients' unique needs. Our commitment to ethical AI practices</p><p className='para-hide'> ensures fairness, transparency, and privacy at every
										stage of development. With a deep understanding of user experience, we design interfaces that make AI accessible and intuitive.
										By fostering collaboration, embracing challenges, and staying at the forefront of AI advancements,
										our approach enables us to deliver AI solutions that drive real value for our clients and their industries.</p>
								<label for="ch3" onClick={() => setread3(!read3)}> {read3 ? (<span className='read-more' >read less</span>) : (<span >read more</span>)}</label>

							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Section B part End */}

			{/* Section C part start */}
			<ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
				<section className="section counter bg-counter">
					<div className="container">
						<div className="row countdown" >
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="counter-item text-center mb-5 mb-lg-0">
									<i className="ti-check color-one text-md"></i>
									<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">{counter && <CountUp start={0} end={70} duration={2} delay={0} />}</span> +</h3>
									<p className="text-white-50">Booking Order</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="counter-item text-center mb-5 mb-lg-0">
									<i className="ti-flag color-one text-md"></i>
									<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">{counter && <CountUp start={0} end={40} duration={2} delay={0} />} </span>+ </h3>
									<p className="text-white-50">Booking Completed</p>
								</div>
							</div>
							{/* <div className="col-lg-3 col-md-6 col-sm-6">
								<div className="counter-item text-center mb-5 mb-lg-0">
									<i className="ti-layers color-one text-md"></i>
									<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">{counter && <CountUp start={0} end={5} duration={2} delay={0} />} </span></h3>
									<p className="text-white-50">Availble States</p>
								</div>
							</div> */}
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="counter-item text-center">
									<i className="ti-medall color-one  text-md"></i>
									<h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">{counter && <CountUp start={0} end={6} duration={2} delay={0} />} </span></h3>
									<p className="text-white-50">Award Winner </p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</ScrollTrigger>
			{/* Section C part End */}

			{/* Section D part start */}
			<section className="section team">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<div className="section-title">
								<span className="h6 text-color">Our Team</span>
								<h2 className="mt-3 content-title">Expert Team member to get best service</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <div className='container '> */}



			<div className='team-detail' >
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem1} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Suman Janarthanan</div>
					<div className="post">Founder & CEO</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem2} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Rishu Mehta</div>
					<div className="post">Director & Co-founder</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem3} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Shivam </div>
					<div className="post">UI/UX & Web Designer</div>




				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem4} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Shubham kumar garg </div>
					<div className="post">Web Developer & Designer</div>



				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem9} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Sanjan Yadav</div>
					<div className="post">Web Developer</div>

				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem5} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Kakara Akilash</div>
					<div className="post">Ambassador</div>



				</div>

				<div className='team-intro'>
					<div className='team-mate'> <img src={mem6} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Ajay Pal Bhullar </div>
					<div className="post">Branding & Marketing</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem8} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Sukhmandeep Singh</div>
					<div className="post">Branding & Marketing</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem10} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Rohan Singh </div>
					<div className="post">Marketing</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem7} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Nitesh Yadav</div>
					<div className="post">PR Team</div>

				</div>
				
			
				
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem11} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Rahul Pandey</div>
					<div className="post">Graphic Designer</div>


				</div>
				
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem13} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Alisha Taneja</div>
					<div className="post">Graphic Designer</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem14} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Aditya Mishra</div>
					<div className="post">Graphic Designer</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem16} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Kunal Kishor</div>
					<div className="post">Research & Development</div>


				</div>
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem15} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Akhilesh Yadav</div>
					<div className="post">Research & Development</div>


				</div>
			
				<div className='team-intro'>
					<div className='team-mate'> <img src={mem12} alt="portfolio" className='team-mate'></img></div>
					<div className='name'>Sonu kumar </div>
					<div className="post">Research & Development</div>


				</div>


				{/*<div className='team-intro'>
						<div className='team-mate'> <img src="images\bg\home-6.jpg" alt="portfolio" className='team-mate'></img></div>
						<div className='name'>Name of  Team -mate</div>


					</div>
					<div className='team-intro'>
						<div className='team-mate'> <img src="images\bg\home-6.jpg" alt="portfolio" className='team-mate'></img></div>
						<div className='name'>Name of  Team -mate</div>


					</div> */}
			</div>



			{/* </div> */}
			{/* Section D part End */}

			{/* Section E part start */}



			{/* <section className="section testimonial bg-gray">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<div className="section-title">
								<span className="h6 text-color">Clients testimonial</span>
								<h2 className="mt-3 content-title">Check what's our user say about us</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="container ">
					<Slider {...settings}>
						<div className="testimonial-item position-relative">
							<i className="ti-quote-left text-color"></i>

							<div className="testimonial-item-content">
								<p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
									consequuntur natus iusto recusandae numquam corrupti facilis blanditiis.</p>

								<div className="testimonial-author">
									<h5 className="mb-0 text-capitalize">Thomas Johnson</h5>
									<p>Excutive Director,themefisher</p>
								</div>
							</div>
						</div>

						<div className="testimonial-item position-relative">
							<i className="ti-quote-left text-color"></i>

							<div className="testimonial-item-content">
								<p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis
									error alias debitis atque consequuntur natus iusto recusandae .</p>

								<div className="testimonial-author">
									<h5 className="mb-0 text-capitalize">Mickel hussy</h5>
									<p>Excutive Director,themefisher</p>
								</div>
							</div>
						</div>
						<div className="testimonial-item position-relative">
							<i className="ti-quote-left text-color"></i>

							<div className="testimonial-item-content">
								<p className="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
									consequuntur natus iusto recusandae numquam corrupti.</p>

								<div className="testimonial-author">
									<h5 className="mb-0 text-capitalize">James Watson</h5>
									<p>Excutive Director,themefisher</p>
								</div>
							</div>
						</div>
						<div className="testimonial-item position-relative">
							<i className="ti-quote-left text-color"></i>

							<div className="testimonial-item-content">
								<p className="testimonial-text">Consectetur adipisicing elit. Quam maiores perspiciatis temporibus odio reiciendis
									error alias debitis atque consequuntur natus iusto recusandae .</p>

								<div className="testimonial-author">
									<h5 className="mb-0 text-capitalize">Mickel hussy</h5>
									<p>Excutive Director,themefisher</p>
								</div>
							</div>
						</div>

					</Slider>
				</div>
			</section> */}


			{/* Section E part End */}


		</div>
	)
}
