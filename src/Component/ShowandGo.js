import { Helmet } from "react-helmet";
import img1 from '../images/blog/login.jpg'
import img2 from '../images/blog/admindashboard.png'
import img3 from '../images/blog/register.png'
import img4 from '../images/blog/captureface.jpg'
import img5 from '../images/blog/attendencedash.jpg'
import img6 from '../images/blog/result.jpg'
import sogo from '../images/blog/S&G.jpg'
import Slider from 'react-slick';

export default function ShowandGo() {
    var settings = {
        dots: true,
        // infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    document.title="S&G Face Recognisation Attendence System"
    return (
        <div>
            <Helmet>
          <title>Show & Go</title>
        </Helmet>
            <section className="page-title bg-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block text-center" data-aos="fade-up">
                                <span className="text-white">Face Recognition Attendance System</span>
                                <h1 className="text-capitalize mb-4 text-lg">Show and Go</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section content start end */}
            {/* section intro start */}

            <section className="section intro">
                <div className='intro-showgo'>
                    <div className='intro-side'data-aos="fade-up">
                        <h2 className="mt-3 content-title">What is Show and Go?</h2>
                        <div className='style-line'></div>
                        <div className='paragraph-sogo'>
                            <p className='align'>A smart attendance system powered by
                                AI that uses face recognition technology automates and
                                simplifies the process of taking attendance. The tool can capture and match the faces of
                                individuals with pre-existing images or data to identify and record attendance.</p>
                            <p className='align'>This can be particularly useful in settings where identification is important, such as schools, universities, and workplaces. By using a smart attendance system with face recognition, organizations can save time and resources by
                                eliminating the need for manual
                                attendance tracking, reducing errors, and providing real-time attendance data.</p>
                            <p className='align'>Show and Go tool can also help to enhance security and prevent fraudulent
                                attendance, ensuring that only authorized individuals are allowed access to specific areas or events.</p>
                            <p className='align'>Overall, a clear and concise description of an AI tool that provides a
                                smart attendance system using face recognition technology is crucial to help potential
                                users and stakeholders understand the benefits and features of the tool and how it can improve
                                their workflow and operations.</p>
                                <a href="http://13.234.113.197/login/" target='blank' className="btn btn-main animated fadeInUp btn-round-full" aria-label="Get started">Live Demo<i className="btn-icon fa fa-angle-right ml-2"></i></a>
                                <a href="https://forms.gle/EUoRsmnuVJoWDyzeA" target='blank' className="btn btn-main animated fadeInUp btn-round-full "style={{marginLeft:"2" +"rem"}} aria-label="Get started">Book Now<i className="btn-icon fa fa-angle-right ml-2"></i></a>
                                <div className="demo-info">
                                <p style={{color:"red" , marginTop:"2"+ "rem"}}>Note:-</p>
                                     Demo User Name:- admin <br />
                                    Demo Password:- admin
                                    </div>
                        </div>
                    </div>
                    <div className='image-side'data-aos="fade-up">
                        <div className='image-sogo'>
                            <img src={sogo} alt='show and go img'></img>

                        </div>
                    </div>
                    
                </div>
            
            </section>
            {/* section Section Intro END */}
            <section className="feature-section" >
                <div className='feature'>
                    <div class="feature-head" data-aos="fade-up">
                        <h2>Installation Process</h2>
                        <div class="separator"></div>
                        <p>Steps and procedures for setting up and configuring Show And Go</p>
                        </div>
                </div>
            </section>
            <div className="insallation-card">
                <div className="virtual-installation installation-box">
                    <div className="installation-contents">
                        <h2>Virtual Installation</h2>
                        <h3>Free</h3>
                        <p >Installation using video conferencing</p>
                        <p> Involves remotely guiding users through the setup and configuration of S&G</p>
                        <p>Sharing screens and providing real-time assistance</p>
                      
                    </div>
                </div>
                <div className="physical-installation installation-box">
                <div className="installation-contents">
                <h2>Physical Installation</h2>
                        <h3>Paid</h3>
                        <p>Dispatching our executive to your location</p>
                        <p>Involves on-site setup and configuration of S&G</p>
                        <p>charges varying based on the distance and time required for the service.</p>
                       
                </div>
                </div>
            </div>

            {/* section Section intro type Start */}
            <div className='container'>
                {/* <div className='how-work'>
                    <div className='how-to-work'> */}
                <Slider {...settings}>

                    <div className='work-slider'>
                        <div className='pic-slider'><img src={img1} alt="" /></div>
                        <div className='how-slide'>
                            <h3>Step 1: Login</h3>
                            <p>Log in to the system using your authorized username and password. This step is the initial point of entry, ensuring that only authenticated users can access the system.</p>
                        </div>
                    </div>
                    <div className='work-slider'>
                        <div className='pic-slider'><img src={img2} alt="" /></div>
                        <div className='how-slide'>
                            <h3>Step 2:Admin Dashboard</h3>
                            <p>Once logged in, you'll arrive at the admin dashboard. Here, you can oversee and manage various aspects of the system, such as user accounts, data, and settings. It serves as a central hub for system administrators.</p>
                        </div>
                    </div>

                    <div className='work-slider'>
                        <div className='pic-slider'><img src={img3} alt="" /></div>
                        <div className='how-slide'>
                            <h3>Step3:Register new user</h3>
                            <p>Within the admin dashboard, you can register new users. This functionality allows administrators to create accounts for individuals who need access to the system. It involves providing necessary user details and permissions.</p>
                        </div>
                    </div>
                    <div className='work-slider'>
                        <div className='pic-slider'><img src={img4} alt="" /></div>
                        <div className='how-slide'>
                            <h3>Step4:Capture Faces</h3>
                            <p>Incorporated within the admin dashboard, this feature allows you to capture facial data for user identification and security purposes. After capturing data, it is then trained into the system, enhancing its ability to recognize authorized individuals.</p>
                        </div>
                    </div>
                    <div className='work-slider'>
                        <div className='pic-slider'><img src={img5} alt="" /></div>
                        <div className='how-slide'>
                            <h3>Step5:Attendence Dashboard</h3>
                            <p>The Attendance Dashboard is a specialized section of the system that provides access to attendance records for individual users. It allows you to track attendance data, view attendance trends, and generate reports for specific users or groups.</p>
                        </div>
                    </div>
                    <div className='work-slider'>
                        <div className='pic-slider'><img src={img6} alt="" /></div>
                        <div className='how-slide'>
                            <h3>Step6:Attendence Report Acess</h3>
                            <p>Within the Attendance Dashboard, the Attendance Report feature allows you to generate detailed attendance reports. These reports can be customized to display attendance data for specific time periods, individuals, or groups, providing valuable insights for tracking attendance and related analytics.</p>
                        </div>
                    </div>
                
                </Slider>
            </div>
            <section className="feature-section" >
                <div className='feature'>
                    <div class="feature-head" data-aos="fade-up">
                        <h2>Features of Show and Go</h2>
                        <div class="separator"></div>
                        <p>User-friendly,Cost-effective and  efficient,High potential,etc</p>
                    </div>
                </div>
            </section>

            <section className='feature' data-aos="fade-up">

                <div className='feature-sogo' >
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>User-Friendly UI</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>provides a positive and enjoyable experience for visitors. It's easy to navigate, visually appealing,
                                and intuitive, leading to increased user satisfaction .</p>
                        </div>
                    </div>
                </div>
                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>High Accuracy</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>Users are more likely to trust information presented on a website that is accurate and reliable .</p>
                        </div>
                    </div>
                </div>

                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>Less Time Consumption</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>It reduces the time spent on manual attendance marking. This is particularly valuable in settings with large numbers of attendees, such as schools, colleges.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>Cost savings</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>By automating tasks and optimizing processes, our clients may be able to reduce operational costs and improve their bottom line.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>Improved decision-making</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>By providing data-driven insights and recommendations, our clients can make more informed and strategic decisions.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>Enhanced customer experience</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>Clients personalize and tailor their interactions with customers, providing a more seamless and positive experience. This can lead to increased customer satisfaction, loyalty, and retention.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>Competitive advantage</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>Can stay ahead of the curve in terms of innovation ,efficiency, and customer experience, positioning themselves for long-term success.</p>
                        </div>
                    </div>
                </div>

                <div className='feature-sogo'>
                    <div class="feature-div">
                        <span class="material-symbols-outlined feature-quotes-part1">
                            check_circle
                        </span>

                        <div class="feature-part2">
                            <h4>High Performance</h4>
                            <div className='feature-line'></div>
                            <p className='feature-p'>A high-performance product can streamline tasks and processes, leading to increased efficiency and productivity.</p>
                        </div>
                    </div>
                </div>





            </section>


</div>
    )
}
