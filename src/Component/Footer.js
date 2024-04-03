import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer className="footer section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="widget">
          <h4 className="text-capitalize mb-4">Company</h4>

          <ul className="list-unstyled footer-menu lh-35">
            <li><a href="about.html">Terms & Conditions</a></li>
            <li><a href="about.html">Privacy Policy</a></li>
            <li><a href="cobtact.html">Support</a></li>
            <li><a href="cobtact.html">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-6">
        <div className="widget">
          <h4 className="text-capitalize mb-4">Quick Links</h4>

          <ul className="list-unstyled footer-menu lh-35">
            <li><Link to="/Portfolio">Portfolio</Link></li>
         <li>  <Link  to="/Services"  >Services</Link></li>
           
            <li><Link to="/Contect">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 mx-auto">
        <div className="widget">
          <h4 className="text-capitalize mb-4">Book now</h4>
          <p>Subscribe to get latest news article and resources </p>

          <form action="#" className="sub-form">
            {/* <input type="text" className="form-control mb-3" placeholder="email..."/> */}
            <a href="https://forms.gle/EUoRsmnuVJoWDyzeA " target="blank"className="btn btn-main btn-small">Book now</a>
          </form>
        </div>
      </div>

      <div className="col-lg-3 col-sm-6">
        <div className="widget">
          <div className="logo mb-4">
            <h3>Sirus <span> AI</span></h3>
          </div>
          <h6> <a href="mailto:sirusxai2023@gmail.com" className='pointer '><i className="fas fa-envelope mr-2"></i><span className='email-size'>sirusxai2023@gmail.com</span></a></h6>
          <a href="tel:8125356941" className='pointer'>Call Us : <span>+91 8125356941</span></a>
        </div>
      </div>
    </div>
    <div className="footer-btm pt-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="copyright">
            Copyright &copy; 2023, Designed &amp; Developed by <Link to="/"
              >Sirus AI</Link>
          </div>
        </div>
       
        <div className="col-lg-6 text-left text-lg-right">
          <ul className="list-inline footer-socials">
            <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=61551044922642"><i className="fab fa-facebook-f mr-2"></i>Facebook</a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/sirusai2023/"><i className="fab fa-instagram mr-2"></i>Instagram</a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/company/97923809/"><i className="fab fa-linkedin mr-2"></i>Linkedin</a></li>
            <li className="list-inline-item"><a href="https://www.youtube.com/@SirusAI"><i className="fab fa-youtube mr-2"></i>Youtube</a></li>

            
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

