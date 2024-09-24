import './DoctorsList.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import doctorimg1 from '../../assets/Doctors-Images/doctor10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import doctorimg2 from '../../assets/Doctors-Images/doctor11.jpg'
import doctorimg3 from '../../assets/Doctors-Images/doctor12.jpg'
import doctorimg4 from '../../assets/Doctors-Images/doctor13.jpg'
import doctorimg5 from '../../assets/Doctors-Images/doctor14.jpg'
import doctorimg6 from '../../assets/Doctors-Images/doctor15.jpg'


export default function DoctorsList() {
    return (
        <section>
      <div className="container">
        <div className="row">
          <div className="heading text-center">
            <h2>Our Team</h2>
          </div>
          <div className="doctors-team d-flex flex-wrap text-center p-2">
            <div className="col-sm-6 col-lg-4">
                <div className="doctor-card" >
                  <div className="img-card">
                    <img src={doctorimg1} alt="doctor" className="img-fluid" />
                  </div>
                  <div className="doctor-info">
                    <h2>Dr. Mario </h2>
                    <p>Emergency Medicine</p>
                    {/* <p><FontAwesomeIcon icon={faMobile} /> 1234567890</p> */}
                    <button className="btn btn-primary">The Biography</button>
                  </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4">
                <div className="doctor-card" >
                  <div className="img-card">
                    <img src={doctorimg2} alt="doctor" className="img-fluid" />
                  </div>
                  <div className="doctor-info">
                    <h2>Dr. Farida</h2>
                    <p>Chiropractor</p>
                    {/* <p><FontAwesomeIcon icon={faMobile} /> 1234567890</p> */}
                    <button className="btn btn-primary">The Biography</button>
                  </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4">
                <div className="doctor-card" >
                  <div className="img-card">
                    <img src={doctorimg3} alt="doctor" className="img-fluid" />
                  </div>
                  <div className="doctor-info">
                    <h2>Dr. John Doe</h2>
                    <p>Family Medicine</p>
                    {/* <p><FontAwesomeIcon icon={faMobile} /> 1234567890</p> */}
                    <button className="btn btn-primary">The Biography</button>
                  </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4">
                <div className="doctor-card" >
                  <div className="img-card">
                    <img src={doctorimg4} alt="doctor" className="img-fluid" />
                  </div>
                  <div className="doctor-info">
                    <h2>Dr. Hussien Mahmoud</h2>
                    <p>Dentist</p>
                    {/* <p><FontAwesomeIcon icon={faMobile} /> 1234567890</p> */}
                    <button className="btn btn-primary">The Biography</button>
                  </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4">
                <div className="doctor-card" >
                  <div className="img-card">
                    <img src={doctorimg5} alt="doctor" className="img-fluid" />
                  </div>
                  <div className="doctor-info">
                    <h2>Dr. Basel</h2>
                    <p>Cardiologist</p>
                    {/* <p><FontAwesomeIcon icon={faMobile} /> 1234567890</p> */}
                    <button className="btn btn-primary">The Biography</button>
                  </div>
                </div>
            </div>
            <div className="col-sm-6 col-lg-4">
                <div className="doctor-card" >
                  <div className="img-card">
                    <img src={doctorimg6} alt="doctor" className="img-fluid" />
                  </div>
                  <div className="doctor-info">
                    <h2>Dr. Yazan</h2>
                    <p>Anesthesiology</p>
                    {/* <p><FontAwesomeIcon icon={faMobile} /> 1234567890</p> */}
                    <button className="btn btn-primary">The Biography</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}


                  {/* <div className="doctor-info">
                    <p>Dr. John Doe is a cardiologist and a specialist in the field of heart
                      diseases. He has been working in the field for more than 20 years and
                      has a vast experience in treating heart diseases.</p>
                      <p>He has a special interest in treating heart diseases in children and
                        has a special interest in treating heart diseases in children and
                        </p>
                  </div> */}


                    {/* <Card style={{ width: '18rem' }} className=" bg-white border-0 rounded-2">
                        <Card.Img variant="top" src={doctorimg1} className=" p-2 rounded-4"/>
                        <Card.Body>
                            <Card.Title className="text-center">Hussien Mahmoud</Card.Title>
                            <Card.Text className="text-center">
                            phiseology
                            </Card.Text>
                            
                        </Card.Body>
                    </Card> */}
