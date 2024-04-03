import React from 'react'
import { Helmet } from "react-helmet";

export default function Contactus() {
	<Helmet>
	<title>Contact Us</title>
  </Helmet>
	return (
		<div>
			 <Helmet>
          <title>Contact Us</title>
        </Helmet>
			<section className="page-title bg-5">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center"data-aos="fade-up">
								<span className="text-white">Contact Us</span>
								<h1 className="text-capitalize mb-4 text-lg">Get in Touch</h1>
								<p></p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*  contact form start*/}
			<section className="contact-form-wrap section">
				<div className="container"data-aos="fade-up">
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12">
							<form id="contact-form" className="contact__form" method="post" action="index.html">
								<h3 className="text-md mb-4">Contact Form</h3>
								<div className="form-group">
									<input name="name" type="text" className="form-control" placeholder="Your Name" required />
								</div>
								<div className="form-group">
									<input name="email" type="email" className="form-control" placeholder="Email Address" required />
								</div>
								<div className="form-group-2 mb-4">
									<textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
								</div>
								<button className="btn btn-main" name="submit" type="submit">Send Message</button>
							</form>
						</div>

						<div className="col-lg-5 col-sm-12">
							<div className="contact-content pl-lg-5 mt-5 mt-lg-0"data-aos="fade-up">
								<span className="text-muted">We are Team of sirus ai</span>
								<h2 className="mb-5 mt-2">We welcome you to contact us for any information you require.</h2>

								<ul className="address-block list-unstyled">
									<li>
										<i className="ti-direction mr-3"></i>malout punjab
									</li>
									<li>
										<i className="ti-email mr-3"></i>
										<a href="mailto:sirusxai2023@gmail.com" className='pointer'><span>sirusxai2023@gmail.com</span></a>
									</li>
									<li>
										<i className="ti-mobile mr-3"></i><a href="tel:8125356941" className='pointer'>Call Us : <span>+91 8125356941</span></a>
									</li>
								</ul>

								<ul className="social-icons list-inline mt-5">
									<li className="list-inline-item">
										<a href="https://www.facebook.com/profile.php?id=61551044922642"><i className="fab fa-facebook-f"></i></a>
									</li>
									<li className="list-inline-item">
										<a href="https://www.instagram.com/sirusai2023/"><i className="fab fa-instagram"></i></a>
									</li>
									<li className="list-inline-item">
										<a href="https://www.linkedin.com/company/97923809/"><i className="fab fa-linkedin-in"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <div className="google-map">




</div> */}
			{/* contect end */}
		</div>
	)
}
