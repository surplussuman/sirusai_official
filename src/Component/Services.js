import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
	document.title="Services"
  return (
    <div>
      <section class="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center"data-aos="fade-up">
          <span className="text-white">Our services</span>
          <h1 className="text-capitalize mb-4 text-lg">What We Do</h1>
        <p></p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* section Section Services Start */}

<section className="section service border-top pb-5">
<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title"data-aos="fade-up">
					<span className="h6 text-color">Our Services</span>
					<h2 className="mt-3 content-title ">We provide the softwere to  their Solve daily life problem </h2>
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
{/* section Section Services End */}
<section className="cta-2">
	<div className="container">
		<div className="cta-block p-5 rounded">
			<div className="row justify-content-center align-items-center" data-aos="fade-up">
				<div className="col-lg-7 text-center text-lg-left" >
					<span className="text-color">For Every type software</span>
					<h2 className="mt-2 text-white" >Commit Your softwere to Our Skilled and Experienced Professionals</h2>
				</div>
				<div className="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
					<Link to="/Contactus" className="btn btn-main btn-round-full float-lg-right ">Contact Us</Link>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}
