
import React, { useState} from 'react';
import { Helmet } from "react-helmet";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

import query1 from "../images/homepage/query1.svg"
import query2 from "../images/homepage/query2.svg"
import query3 from "../images/homepage/query3.svg"



export default function Content() {
	const [count, setcount] = useState(false);
	// var settings = {
	// 	dots: true,
	// 	// infinite: true,
	// 	speed: 1500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 1000
	// };
	const [read1, setread1] = useState(false);
	const [read2, setread2] = useState(false);
	const [read3, setread3] = useState(false);


  document.title="Sirus AI"
	return (
		<body>
		 <Helmet>
          <title>Home</title>
        </Helmet>
			<div>
		
				{/* <ScrollTrigger onEnter={()=>setcount(true)} onExit={()=>setcount(false)}> */}
				<section className="slider">
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-md-10">
								<div className="block">
									<span className="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
									<h1>Sirus AI</h1>
									<h2 className="animated fadeInUp mb-5 text-white text-capitalize ai-font">Unlock the Power of AI Transforming Tomorrow with Today's <span className='ai'> AI Innovation.</span></h2>
									<a href="/ShowandGo"  className="btn btn-main animated fadeInUp btn-round-full" aria-label="Get started">Get started<i className="btn-icon fa fa-angle-right ml-2"></i></a>
								</div>
							</div>
						</div>
					</div>

				</section>
				{/* // section A part start */}
				<section className="section intro">
					<div className="container">
						<div className="row ">
							<div className="col-lg-8" data-aos="fade-down">
								<div className="section-title">
									<span className="h6 text-color ">We are creative & expert people</span>
									<h2 className="mt-3 content-title">We work with AI & provide the software to user with their Solve daily life problem
									</h2>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 col-12" data-aos="fade-up">
								<div className="intro-item mb-5 mb-lg-0">
									<input id="ch1" type='checkbox'></input>
									<i className="ti-desktop color-one"></i>
									<h4 className="mt-4 mb-3"> Our AI-Powered Software</h4>
									<p className='align'>Our software is at the forefront of artificial intelligence innovation.
										With cutting-edge algorithms and seamless integration, it sets a new standard for efficiency, </p><p className='para-hide'>accuracy, and user-friendliness.
											Discover the transformative power of AI with our software solutions, engineered to exceed your expectations</p>
											<label htmlFor="ch1" onClick={()=>setread1(!read1)}> {read1 ?(<span className='read-more' >read less</span>) : (<span>read more</span>)}
									</label>
								</div>
							</div>
							<div className="col-lg-4 col-md-6" data-aos="fade-down">
								<div className="intro-item mb-5 mb-lg-0">
									<input id="ch2" type='checkbox'></input>
									<i className="ti-medall color-one"></i>
									<h4 className="mt-4 mb-3">Our AI Services</h4>
									<p className='align'> we deliver solutions that drive success.
										Harness the limitless potential of AI with our expert team, innovative technology, and a commitment to exceeding your expectations.</p><p className='para-hide'>
										Join us on the journey to smarter, more efficient, and more data-driven decision-making.</p>
										<label for="ch2" onClick={()=>setread2(!read2)}> {read2 ?(<span className='read-more' >read less</span>) : (<span>read more</span>)}
									</label>
								</div>
							</div>
							<div className="col-lg-4 col-md-12" data-aos="fade-up">
								<div className="intro-item">
									<input id="ch3" type='checkbox'></input>
									<i className="ti-layers-alt color-one"></i>
									<h4 className="mt-4 mb-3 ">Empowering Your Vision with AI-Powered Simplicity</h4>
									<p className='align'>At <b>Sirus AI</b>, we're committed to making AI accessible and easy to use for you.
										Our software is designed with your needs in mind, </p><p className='para-hide'>delivering powerful AI
											capabilities wrapped in a user-friendly experience. Achieve more, effortlessly, with AI that works for you.</p>
											<label for="ch3" onClick={()=>setread3(!read3)}> {read3?(<span className='read-more' >read less</span>) : (<span>read more</span>)}
									</label>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* // Section A part end */}

				{/* section B part start */}
				<section className="section about position-relative">
					<div className="bg-about" data-aos="fade-down"></div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 offset-lg-6 offset-md-0">
								<div className="about-item " data-aos="fade-up">
									<span className="h6 text-color">What we are</span>
									<h2 className="mt-3 mb-4 position-relative content-title">We are dynamic team of create ai software</h2>
									<div className="about-content">
										<h4 className="mb-3 position-relative">We have Perfect Solution</h4>
										<p className="mb-5">Unlock the full potential of artificial intelligence with our expertise. From innovative AI development to cutting-edge solutions,
											we're dedicated to delivering the perfect software for your needs. Partner with us and lead the way in AI-driven success..</p>

										<a href="https://forms.gle/EUoRsmnuVJoWDyzeA" target='blank' className="btn btn-main btn-round-full">Get started</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<ScrollTrigger onEnter={() => setcount(true)} onExit={() => setcount(false)}>
					<section className="section counter">
						<div className="container">
							<div className="row countdown" >
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="counter-item text-center mb-5 mb-lg-0">
										<h3 className="mb-0"><span className="counter-stat font-weight-bold">{count && <CountUp start={0} end={70} duration={2} delay={0} />}</span> +</h3>
										<p className="text-muted">Booking Order</p>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="counter-item text-center mb-5 mb-lg-0">
										<h3 className="mb-0"><span className="counter-stat font-weight-bold">{count && <CountUp start={0} end={40} duration={2} delay={0} />} </span>+ </h3>
										<p className="text-muted">Booking Completed</p>
									</div>
								</div>
								{/* <div className="col-lg-3 col-md-6 col-sm-6">
									<div className="counter-item text-center mb-5 mb-lg-0">
										<h3 className="mb-0"><span className="counter-stat font-weight-bold">{count && <CountUp start={0} end={5} duration={2} delay={0} />}</span></h3>
										<p className="text-muted">Availble States</p>
									</div>
								</div> */}
								<div className="col-lg-3 col-md-6 col-sm-6">
									<div className="counter-item text-center">
										<h3 className="mb-0"><span className="counter-stat font-weight-bold">{count && <CountUp start={0} end={6} duration={2} delay={0} />}</span></h3>
										<p className="text-muted">Award Winner </p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</ScrollTrigger>
				{/* Section B part End */}

				{/* section c part start */}
				<section className="section service border-top">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 text-center" data-aos="fade-up">
								<div className="section-title">
									<span className="h6 text-color">Our Services</span>
									<h2 className="mt-3 content-title ">We provide the software to  their Solve daily life problem </h2>
								</div>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="service-item mb-5">
									<i className="ti-desktop"></i>
									<h4 className="mb-3">Facial recognition attendance system using AI.</h4>
									<p>it's automated, efficient, and utilizes AI-powered facial recognition technology for attendance management.
										It's concise and should help potential users quickly understand the value your system provides.</p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="service-item mb-5">
									<i className="ti-layers"></i>
									<h4 className="mb-3">Interface Design.</h4>
									<p><span className='bold'>Our AI Software: Where Innovation Meets User-Friendly Design</span>Experience the future of technology with an intuitive interface that makes AI accessible to everyone.
										Our software's user-friendly design puts the power of artificial intelligence at your fingertips,
										simplifying complex tasks and enhancing your workflow.</p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="service-item mb-5">
									<i className="ti-bar-chart"></i>
									<h4 className="mb-3">AI Consulting.</h4>
									<p>Companies may offer consulting services to help clients understand how AI can benefit their business.
										This includes AI strategy development, feasibility studies, and ROI analysis.</p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="service-item mb-5 mb-lg-0">
									<i className="ti-vector"></i>
									<h4 className="mb-3">AI for Healthcare.</h4>
									<p>Specialized services for the healthcare industry, including medical image analysis,
										patient data analytics, and predictive diagnostics.</p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="service-item mb-5 mb-lg-0">
									<i className="ti-android"></i>
									<h4 className="mb-3">AI for Marketing.</h4>
									<p>Services for marketing optimization, including customer segmentation,
										personalized marketing campaigns, and recommendation system</p>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6">
								<div className="service-item mb-5 mb-lg-0">
									<i className="ti-pencil-alt"></i>
									<h4 className="mb-3">AI for Finance.</h4>
									<p>Solutions tailored to the financial sector, such as fraud detection,
										risk assessment, algorithmic trading, and credit scoring</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Section c part End */}

				{/* section d part start */}
				<section className="section cta">
					<div className="container">
						<div className="row">
							<div className=" col-xl-5 col-lg-6">
								<div className="cta-item  bg-white p-5 rounded">
									<span className="h6 text-color">We create for you</span>
									<h2 className="mt-2 mb-4">Commit Your software to Our Skilled and Experienced Professionals</h2>
									<p className="lead mb-4">Have any software required then? For immidiate support :</p>
									<h3>
										<a href="tel:8125356941" className='pointer'><i className="ti-mobile mr-3 text-color"></i><a href="tel:8125356941" className='pointer'> <span>+91 8125356941</span></a></a>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Section d part End */}
				{/* section e part start */}






				{/* <section className="section testimonial">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 ">
							<div className="section-title">
								<span className="h6 text-color">Clients Feedback</span>
								<h2 className="mt-3 content-title">Check what's our users say about us</h2>
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






				{/* Section e part End */}

				{/* section f part start */}
				<section className="section latest-blog bg-2">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 text-center">
								<div className="section-title">
									<span className="h6 text-color">Latest News</span>
									<h2 className="mt-3 content-title text-white">Any Query? Reach Out To Us.</h2>
									<p>We Are Here To Help You Find A Solution That Suits Your Business Need.</p>
								</div>
							</div>
						</div>

						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-6 mb-5">
								<div className="card bg-transparent border-0">
									<img loading="lazy" src={query1} alt="blog" className="img-fluid rounded" />

									<div className="card-body mt-2">

										<h3 className="mt-3 mb-5 lh-36"><a href="https://youtu.be/8JtON6AFxbU?si=sGhQ9t62ErPsqdNJ" target='blank' className="text-white ">Get a visual representation of how we work!</a></h3>

										<a href="https://youtu.be/8JtON6AFxbU?si=sGhQ9t62ErPsqdNJ" target='blank' className="btn btn-small btn-solid-border btn-round-full text-white">Watch NOW</a>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-5">
								<div className="card border-0 bg-transparent">
									<img loading="lazy" src={query2} alt="blog" className="img-fluid rounded" />

									<div className="card-body mt-2">

										<h3 className="mt-3 mb-5 lh-36"><a href="tel:8125356941" className="text-white">Our sales expert is just one call away to meet your needs.</a>
										</h3>

										<a href="tel:8125356941" className="btn btn-small btn-solid-border btn-round-full text-white">Get in Touch</a>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-5">
								<div className="card border-0 bg-transparent">
									<img loading="lazy" src={query3} alt="blog" className="img-fluid rounded" />

									<div className="card-body mt-2">

										<h3 className="mt-3 mb-5 lh-36"><a href="https://www.instagram.com/direct/t/17844434654989939" className="text-white">Have a question? Chat with Us without any hesitation</a></h3>

										<a href="https://www.instagram.com/direct/t/17844434654989939" className="btn btn-small btn-solid-border btn-round-full text-white">Start Chat</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="mt-70 position-relative">
					<div className="container">
						<div className="cta-block-2 bg-gray p-5 rounded border-1">
							<div className="row justify-content-center align-items-center ">
								<div className="col-lg-7">
									<span className="text-color">For Every type software</span>
									<h2 className="mt-2 mb-4 mb-lg-0">Commit Your software to Our Skilled and Experienced Professionals</h2>
								</div>
								<div className="col-lg-4">
									<Link to="/Contect" className="btn btn-main btn-round-full float-lg-right ">Contact Us</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Section f part End */}
				{/* </ScrollTrigger> */}

			</div>

		</body>
	)
}
