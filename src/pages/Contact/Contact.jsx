import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faHome,
  faMapLocation,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../../Components/Banner/Banner";
import "./Contact.css";

import mapImg from "../../assets/Contact-Images/Map.png";
import adressImg from "../../assets/Contact-Images/Adress.png";
import phoneImg from "../../assets/Contact-Images/phone.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <Banner title="Contact" smtitle="Contact" />
      
      <div className="contact-background">
        <section className="contact-us">
        <div className="container">
          <div className="form-container row justify-content-center   p-5 ">
            <div className=" col-md-6 col-lg-6 col-sm-12">
              <form className="h-100">  
                <div className="form-control">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Your Email" />
                </div>
                <div className="form-control">
                  <input type="text" placeholder="Phone Number" />
                </div>
                <select name="" id="">
                  <option value="">Select Department</option>
                  <option value="">one</option>
                  <option value="">two</option>
                  <option value="">three</option>
                </select>
                <div className="form-control">
                  <textarea type="text" placeholder="Your Message" />
                </div>
                <button className="btn btn-lg btn-primary">Submit</button>
              </form>
            </div>
            <div className=" col-md-6 col-lg-6 col-sm-12">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us For Any Information</h3>
                  <div className="location">
                    <li>
                      <FontAwesomeIcon icon={faMapLocation} />
                      Location
                    </li>
                    <hr />
                    <p>
                      5 Mossadak Ad Doqi, 5 Mossadak, street, Dokki, Giza
                      Governorate
                    </p>
                  </div>

                  <div className="contacts">
                    <li>
                      <FontAwesomeIcon icon={faEnvelope} /> Email & Phone
                    </li>
                    <hr />
                    <p>HussienMahmoud@mail.com</p>
                    <p>[ +20 ] 1126851783</p>
                  </div>

                  <div className="follows">
                    <li>
                      <FontAwesomeIcon icon={faGlobe} /> Follow Us
                    </li>
                    <hr />
                    <div className="social">
                      <FontAwesomeIcon icon={faMobile} />
                      <FontAwesomeIcon icon={faGlobe} />
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="footer">
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className="Contact-boxs">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="boxs box1">
                <div className="box-icon">
                  <img src={phoneImg} alt="Box-Icon" />
                </div>
                <div className="box-text">
                  <h4>Contact Number</h4>
                  <p>+20 1126851783</p>
                  <p>+20 1030062797</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="boxs box2">
                <div className="box-icon">
                  <img src={adressImg} alt="Box-Icon" />
                </div>
                <div className="box-text">
                  <h4>Email Address</h4>
                  <p>hussien1498@gmail.com</p>
                  <p>abcde@mail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="boxs box3">
                <div className="box-icon">
                  <img src={mapImg} alt="Box-Icon" />
                </div>
                <div className="box-text">
                  <h4>Address</h4>
                  <p>Egypt-Cairo</p>
                  <p>-Ain Shams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
