import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import logo from "../images/fulllogo.png"
export default function Navigation() {

const [showMedia,setMedia]=useState(false)
const [showdrop,setdrop]=useState(false)
const [sogo,setsogo]=useState(false)
  return (
    <div>
      <header className="navigation">
  {/* <div className="header-top ">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-2 col-md-4">
          <div className="header-top-socials text-center text-lg-left text-md-left">
            <a href="https://www.facebook.com/profile.php?id=61551044922642" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/sirusai2023/" aria-label="instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/97923809/" aria-label="linkedin"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
          <div className="header-top-info mb-2 mb-md-0 hide">
            <a href="tel:8125356941" className='pointer'>Call Us : <span>+91 8125356941</span></a>
            <a href="mailto:sirus23.com" className='pointer'><i className="fas fa-envelope mr-2"></i><span>sirusxai2023@gmail.com</span></a>
          </div>
        </div>
      </div>
    </div>
  </div> */}

  <div id="navbar" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg px-0 py-4">
          <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo"></img>
            </Link>
      
            <button className="navbar-toggler collapsed" onClick={()=>setMedia(!showMedia)} type="button" data-toggle="collapse" data-target="#navbarsExample09"
              aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation" >{showMedia?
              (<span className="fa fa-times" ></span>):(<span className="fa fa-bars"></span>)}
            
            </button>
      
            <div className={showMedia?"collapse navbar-collapse text-center show":"collapse navbar-collapse text-center"} id="navbarsExample09">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item @@home " onClick={()=> setMedia(!showMedia)} >
                  <Link className="nav-link pointer" to="/" onClick={()=>setdrop(false) }>Home</Link>
                </li>
                <li className="nav-item @@service" onClick={()=>setdrop(false) }><Link className="nav-link pointer" to="/About" onClick={()=> setMedia(!showMedia)} >About us</Link></li>
                <li className={showdrop?"nav-item dropdown @@about show":"nav-item dropdown @@about"} onClick={()=>setdrop(!showdrop)}>
                  <div className="nav-link dropdown-toggle " to="/" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" >Services <i className="fas fa-chevron-down small"></i></div>
                  <ul className={showdrop?"dropdown-menu show":"dropdown-menu"} onClick={()=>setdrop(!showdrop) }  aria-labelledby="dropdown03">

                  <li className={sogo?"nav-item dropdown @@about show":"nav-item dropdown @@about"} onClick={()=>setsogo(!sogo)}>
                  <div className="dropdown-item @@pricing"  onClick={()=> setMedia(!showMedia)} >product  <i className="fas fa-chevron-right small"></i></div>
                 
                  <ul className={sogo?"dropdown-menu dropso show":"dropdown-menu dropso "} onClick={()=>setdrop(!sogo) }  aria-labelledby="dropdown03">
                    <li><Link className="dropdown-item " to='/ShowandGo' onClick={()=> setMedia(!showMedia)} >Show and GO</Link></li>
                  </ul>
                </li>
                    <li><Link className="dropdown-item @@pricing" to="/Services" onClick={()=> setMedia(!showMedia)} >More Services</Link></li>
                  </ul>
                </li>
                
                <li className="nav-item @@project" onClick={()=>setdrop(false) }><Link className="nav-link pointer" to="/Portfolio" onClick={()=> setMedia(!showMedia)} >Portfolio</Link></li>
             {/*   <li className="nav-item dropdown @@blog">
                  <a className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i class="fas fa-chevron-down small"></i></a>
                   <ul className="dropdown-menu" aria-labelledby="dropdown05">
                    <li><a className="dropdown-item @@blogGrid" to="blog-grid.html">Blog Grid</a></li>
                    <li><a className="dropdown-item @@blogSidebar" to="blog-sidebar.html">Blog with Sidebar</a></li>
                    <li><a className="dropdown-item @@blogSingle" to="blog-single.html">Blog Single</a></li>
      
                    <li className="dropdown dropdown-submenu dropleft">
                      <a className="dropdown-item dropdown-toggle" to="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
            
                      <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                        <li><a className="dropdown-item" to="index.html">Submenu 01</a></li>
                        <li><a className="dropdown-item" to="index.html">Submenu 02</a></li>
                      </ul>
                    </li>
                  </ul> 
                </li>*/}
                <li className="nav-item @@contact" onClick={()=>setdrop(false) }><Link className="nav-link pointer" to="/Contactus">Contact</Link></li>
              </ul>
      
              {/* <div className="my-2 my-md-0 ml-lg-4 text-center">
                <Link to="/Login" className="btn btn-solid-border btn-round-full">Login</Link>
              </div>
              <div className="my-2 my-md-0 ml-lg-4 text-center">
                <Link to="/" className="btn btn-solid-border btn-round-full">Register</Link>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  
</header>
    </div>
  )
}
