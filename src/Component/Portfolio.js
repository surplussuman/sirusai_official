import React from 'react'
import { Link } from 'react-router-dom'
export default function Portfolio() {
document.title="Portfolio"
	return (
		<div>

			<section className="page-title bg-4">

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center" data-aos="fade-up">
								<span className="text-white">Latest works</span>
								<h1 className="text-capitalize mb-4 text-lg">Portfolio</h1>

							</div>
						</div>
					</div>
				</div>
			</section>

			{/* section portfolio start */}
			<section className="section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7 text-center">
							<div className="section-title" data-aos="fade-up">
								<span className="h6 text-color">Our works</span>
								<h2 className="mt-3 content-title">We have done lots of works, lets check some</h2>

							</div>
						</div>
					</div>
				</div>

				<section className='portfolio'>
					<div className='portfolio-tour'>
						<div className='portfolio-side'>
							{/* left picture start */}
							<div className='left-portfolio'>
								<Link to="/Event_descriprition6">
									<div className='portfolio-img img1' >

										<span class="material-symbols-outlined plus-icon">
											add
										</span>

									</div>
									</Link>
							</div>
							<div className='middle-portfolio last-all'>
								<div className='line-port'>

								</div>
								<div className='circle-port'>
									<h4>6</h4>
								</div>
								<div className='line-port'>

								</div>
							</div>
							<div className='right-portfolio'>
								<div class="portfolio-details">
									<h4>Istart At Sikar</h4>
									<p className='featu'>We are extremely grateful to the Rajasthan Government and iStart for acknowledging our vision and potential during the iStart Ideathon, organized as part of the 2030 mission. This victory not only affirms our dedication and hard work but also motivates us to set our sights even higher as the State Champion of Rajasthan.</p>

								</div>
							</div>
						</div>
						{/* left picture end */}
						{/* in less than 400px show side line */}
						<div className='middle-portfolio  last-400px' >
							<div className='line-port'>

							</div>
							<div className='circle-port'>
								<h4>6</h4>
							</div>
							<div className='line-port'>

							</div>

						</div>
					</div>

					{/* in less than 400px show side line */}
					<div className='portfolio-tour'>
						<div className='portfolio-side'>
							{/* rignt picture start */}
							<div className='right-portfolio port-hide'>
								<div class="portfolio-details">
									<h4>Istart At Bharatpur</h4>
									<p className='featu'>The iStart ideathon at the Government Engineering College in Bharatpur is an exciting event that not only fosters innovation but also provides an incredible learning opportunity. It's a platform that encourages participants to expand their knowledge, cultivate their problem-solving skills, and gain hands-on experience in tackling real-world challenges.</p>

								</div>
							</div>
							<div className='middle-portfolio last-all'>
								<div className='line-port'>

								</div>
								<div className='circle-port'>
									<h4>5</h4>
								</div>
								<div className='line-port'>

								</div>
							</div>
							<div className='left-portfolio'>
							<Link to="/Event_descriprition5">
									<div className='portfolio-img img2'>

										<span class="material-symbols-outlined plus-icon">
											add
										</span>

									</div>
									</Link>
							</div>
							<div className='right-portfolio port-show'>
								<div class="portfolio-details">
									<h4>Udyam At Bhatinda</h4>
									<p className='featu'>Udyam, organized by the Punjab government under the Startup Punjab initiative at the Bureau of Employment in Bhatinda, is a remarkable opportunity. It's an event that serves as a catalyst for entrepreneurial growth, bringing together aspiring entrepreneurs and providing them with invaluable insights and resources.</p>

								</div>
							</div>
						</div>
						{/* rignt picture end */}
						{/* in less than 400px show side line */}
						<div className='middle-portfolio  last-400px' >
							<div className='line-port'>

							</div>
							<div className='circle-port'>
								<h4>5</h4>
							</div>
							<div className='line-port'>

							</div>

						</div>
						{/* in less than 400px show side line */}
					</div>
					<div className='portfolio-tour'>
						<div className='portfolio-side'>
							{/* left picture start */}
							<div className='left-portfolio'>
							<Link to="/Event_descriprition4">
									<div className='portfolio-img img3'>

										<span class="material-symbols-outlined plus-icon">
											add
										</span>

									</div>
									</Link>
							</div>
							<div className='middle-portfolio last-all'>
								<div className='line-port'>

								</div>
								<div className='circle-port'>
									<h4>4</h4>
								</div>
								<div className='line-port'>

								</div>
							</div>
							<div className='right-portfolio'>
								<div class="portfolio-details">
									<h4>Udyam At Bhatind</h4>
									<p className='featu'>Udyam, organized by the Punjab government under the Startup Punjab initiative at the Bureau of Employment in Bhatinda, is a remarkable opportunity. It's an event that serves as a catalyst for entrepreneurial growth, bringing together aspiring entrepreneurs and providing them with invaluable insights and resources.</p>

								</div>
							</div>
						</div>
						{/* left picture end */}
						{/* in less than 400px show side line */}
						<div className='middle-portfolio  last-400px' >
							<div className='line-port'>

							</div>
							<div className='circle-port'>
								<h4>4</h4>
							</div>
							<div className='line-port'>

							</div>

						</div>
						{/* in less than 400px show side line */}
					</div>
					<div className='portfolio-tour'>
						<div className='portfolio-side'>
							{/* rignt picture start */}
							<div className='right-portfolio port-hide'>
								<div class="portfolio-details">
									<h4>Startup Punjab At DBS University</h4>
									<p className='featu'>Innovation Mission Punjab, a flagship event under the Startup Punjab initiative organized by the Punjab government at Desh Bhagat Singh University, is a game-changing initiative. It's a forum where innovation and entrepreneurship converge, empowering individuals to create solutions for today's challenges while fostering a dynamic learning experience.</p>

								</div>
							</div>
							<div className='middle-portfolio last-all'>
								<div className='line-port'>

								</div>
								<div className='circle-port'>
									<h4>3</h4>
								</div>
								<div className='line-port'>

								</div>
							</div>
							<div className='left-portfolio'>
							<Link to="/Event_descriprition3">
									<div className='portfolio-img img4'>

										<span class="material-symbols-outlined plus-icon">
											add
										</span>

									</div>
									</Link>
							</div>
							<div className='right-portfolio port-show'>
								<div class="portfolio-details">
									<h4>Codevista 2.0 At BF School of Enterpnureship</h4>
									<p className='featu'>CodeVista 2.0, organized by the Baba Farid School of Entrepreneurship, is an exciting follow-up to the previous competition. It's an event that continues to nurture entrepreneurship and innovation, providing a platform for participants to excel and shine.</p>

								</div>
							</div>
						</div>
						{/* rignt picture end */}
						{/* in less than 400px show side line */}
						<div className='middle-portfolio  last-400px' >
							<div className='line-port'>

							</div>
							<div className='circle-port'>
								<h4>3</h4>
							</div>
							<div className='line-port'>

							</div>

						</div>
						{/* in less than 400px show side line */}
					</div>
					<div className='portfolio-tour'>
						<div className='portfolio-side'>
							{/* left picture start */}
							<div className='left-portfolio'>
							<Link to="/Event_descriprition2">
									<div className='portfolio-img img5'>

										<span class="material-symbols-outlined plus-icon">
											add
										</span>

									</div>
									</Link>
							</div>
							<div className='middle-portfolio last-all'>
								<div className='line-port'>

								</div>
								<div className='circle-port'>
									<h4>2</h4>
								</div>
								<div className='line-port'>

								</div>
							</div>
							<div className='right-portfolio'>
								<div class="portfolio-details">
									<h4>Codevista 2.0 At BF School of Entrepreneurship.</h4>
									<p className='featu'>CodeVista 2.0, organized by the Baba Farid School of Entrepreneurship, is an exciting follow-up to the previous competition. It's an event that continues to nurture entrepreneurship and innovation, providing a platform for participants to excel and shine.</p>

								</div>
							</div>
						</div>
						{/* left picture end */}
						{/* in less than 400px show side line */}
						<div className='middle-portfolio  last-400px' >
							<div className='line-port'>

							</div>
							<div className='circle-port'>
								<h4>2</h4>
							</div>
							<div className='line-port'>

							</div>

						</div>
						{/* in less than 400px show side line */}
					</div>
					<div className='portfolio-tour'>
						<div className='portfolio-side'>
							{/* rignt picture start */}
							<div className='right-portfolio port-hide'>
								<div class="portfolio-details">
									<h4>Paryog 2.0 At MIMIT MAlout</h4>
									<p className='featu'>My first participation at Malout Institute of Management and Information Technology in Paroyg 2.0 was an unforgettable experience. It marked the beginning of my journey in innovation and problem-solving, and I'm grateful for the opportunity to be a part of such an inspiring event</p>

								</div>
							</div>
							<div className='middle-portfolio last-all last-all'>
								<div className='line-port'>

								</div>
								<div className='circle-port'>
									<h4>1</h4>
								</div>
								<div className='line-port'>

								</div>
							</div>
							<div className='left-portfolio'>
							<Link to="/Event_descriptiom">
									<div className='portfolio-img img6' >

										<span class="material-symbols-outlined plus-icon">
											add
										</span>

									</div>
									</Link>
							</div>
							<div className='right-portfolio port-show'>
								<div class="portfolio-details">
									<h4>Paryog 2.0 At MIMIT MAlout</h4>
									<p className='featu'>My first participation at Malout Institute of Management and Information Technology in Paroyg 2.0 was an unforgettable experience. It marked the beginning of my journey in innovation and problem-solving, and I'm grateful for the opportunity to be a part of such an inspiring event</p>

								</div>
							</div>
						</div>
						{/* rignt picture end */}
						{/* in less than 400px show side line */}
						<div className='middle-portfolio  last-400px' >
							<div className='line-port'>

							</div>
							<div className='circle-port'>
								<h4>1</h4>
							</div>
							<div className='line-port'>

							</div>

						</div>
						{/* in less than 400px show side line */}
					</div>
				</section>

			</section>
			{/*  section portfolio END  */}
		</div>
	)
}
