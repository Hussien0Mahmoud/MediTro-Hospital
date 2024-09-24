
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from'../../assets/logo.png'
import Face from '../../assets/Footer-Images/Face-icon.png'
import instgram from '../../assets/Footer-Images/instgram-icon.png'
import linkedin from '../../assets/Footer-Images/linkedin-icon.png'
import twitter from '../../assets/Footer-Images/twitter-icon.png'
import shape9 from '../../assets/Footer-Images/shape-9.png'
import shape10 from '../../assets/Footer-Images/shape-10.png'
import shape11 from '../../assets/Footer-Images/shape-11.png'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <img src={shape11} alt="Header-Image-Shape" className="shape11" />
                <div className="col-md-3 col-sm-6">
                    <img src={logo} alt="Logo-Image" className="footerlogo" />
                    <p>Search, compare and book doctor consultations with ease.
                        Track your steps count & earn points on hitting the daily goal.
                    </p>
                    <div className="footer-contact">
                        <div className="footer-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="footer-text">
                            <h6>Contact Us</h6>
                            <h4>+201126851783</h4>
                        </div>
                    </div>
                    <img src={shape9} alt="Header-Image-Shape" className="shape9" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quick Links</h2>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="#">Our Team</Link></li>
                        <li><Link to="/booking">Booking</Link></li>
                        <li><Link to="#">Faq'S</Link></li>
                        
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Our Services</h2>
                    <ul className="footer-links">
                        <li><Link to="#">Dental Care</Link></li>
                        <li><Link to="#">Cardiac Clinic</Link></li>
                        <li><Link to="#">Massege Therapy</Link></li>
                        <li><Link to="#">Cardiology</Link></li>
                        <li><Link to="#">Precise Diagnosis</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Subscribe</h2>
                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">Subscribe Now</button>
                    </form>
                    <ul className="social">
                        <li><Link to="#"><img src={Face} alt="FaceBook-Icon" /></Link></li>
                        <li><Link to="#"><img src={twitter} alt="Twitter-Icon" /></Link></li>
                        <li><Link to="#"><img src={instgram} alt="Instgram-Icon" /></Link></li>
                        <li><Link to="#"><img src={linkedin} alt="LinkedIn-Icon" /></Link></li>
                    </ul>
                    
                    <div className="shap10">
                        <img src={shape10} alt="Header-Image-Shape" className="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <span>Copyright © 2024 Design & Developed by
                            <a href="https://www.linkedin.com/in/hussien-mahmoud-5a919621a/" target='_blabk'>Hussien Mahmoud</a></span>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

