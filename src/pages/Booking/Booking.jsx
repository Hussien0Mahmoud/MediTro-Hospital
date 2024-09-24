import Banner from "../../Components/Banner/Banner";
import './Booking.css'

export default function Booking() {
  return (
    <>
      <Banner title="Booking" smtitle="Booking" />

      <section className="section-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-lg-6 col-md-6 col-sm-6">
              <div className="booking-form">
                <h3 className="title">Book Appointment</h3>
                <form action="">
                  <div className="form-group">
                    <select className="form-control">
                      <option>Selecty Department</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-control">
                      <option>Selecty Doctor</option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder=" Your Name" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="form-group">
                    <input type="date" className="form-control" placeholder="Phone Number" />
                  </div>
                  <button className="btn btn-lg btn-primary">Appointment Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

{/* <section className="booking-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 m-auto">
              <div className="appointment-form">
                <h3 className="title">Book Appointment</h3>
                <form className="">
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
                <select name="" id="">
                  <option value="">Select Doctor</option>
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
            </div>
          </div>
        </div>
      </section> */}






      // <section className="section-2">
      //   <div className="container">
      //     <div className="row justify-content-center">
      //       <div className="col-lg-5 col-lg-6 col-md-6 col-sm-6">
      //         <div className="booking-form">
      //           <h3 className="title">Book Appointment</h3>
      //           <form action="">
      //             <div className="form-group">
      //               <select className="form-control">
      //                 <option>Selecty Department</option>
      //                 <option>One</option>
      //                 <option>Two</option>
      //                 <option>Three</option>
      //               </select>
      //             </div>
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>