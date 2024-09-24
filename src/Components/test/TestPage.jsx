import "./test.css";

import img1 from "../../assets/About-Images/doctor3.jpg";
import img2 from "../../assets/About-Images/doctor2.jpg";
import img3 from "../../assets/About-Images/doctor4.jpg";

export default function TestPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="allimgs d-flex ">
              <div className="col-lg-6 left">
                <div className="image ">
                  <img src={img1} alt=""  className="img1"/>
                </div>
                <div className="image ">
                  <img src={img3} alt="" className="img2" />
                </div>
              </div>
              <div className="col-lg-6  right">
                <div className="image ">
                  <img src={img2} alt="" className="img3" />
                </div>
                <div className="image imgbx">
                  20
                  <span>Year Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


{/* <header>
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <h5>We Provide All Health Care Solution</h5>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
                <button><Link to="/about">Read More</Link></button>
                <img src={shape3} alt="Header-Image-Shape" className="shape3" />
                <img src={shape1} alt="Header-Image-Shape" className="shape1" />
                
            </div>
            <div className="col-md-6 col-lg-6 ">
              <div className="header-img-box">
                <div className="header-img">
                <img src={headerimg} alt="Header-Image" />
                </div>
                <img src={shape2} alt="Header-Image-Shape" className="shape2" />
              </div>
            </div>
        </div>
      </div>
    </header> */}

//     header {
//     /* background-color: #ddd; */
//     background-image: url(../../assets/Home-Images/bg1.jpg);
// }
// header::before {
//       /* content: "";
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       right: 0; 
//     height: 200px; 
//       background: linear-gradient(to top,#ddd 50%, transparent 50%); */

//       content: "";
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       /* right: 0; */
//       height: 20%;
//       width: 100%;
//       background-color: #dddddd49;
//       border-radius: 0 0 50% 50%;
//       /* transform: skewY(-5deg);
//       transform-origin: 0 100%; */
//       z-index: -1;
//     }
// header .row {
//     padding: 70px 0px;
// }
// header .row h5 {
//     color: var(--btn-color);
//     font-size: 20px;
//     font-weight: 600;
//     margin: 80px 0px 10px 0px;
//     background-image: url(../../assets/Home-Images/bgc-h5.png);
//     background-repeat: repeat;
//     width: 310px;
//     /* background-position: 100%;
//     background-repeat:repeat; */
//     /* display: inline; */
//     /* background-size: 1%; */
//     /* background-position-y: 50%; */
    
// }
// header h2 {
//     color: var(--main-color);
//     font-size: 55px;
//     font-weight: 700;
//     /* letter-spacing: 1px; */
//     word-spacing: 5px;
// }
// header button {
//     background-color: var(--orange-color);
//     width: 180px;
//     height: 60px;
//     border: 1px solid var(--orange-color);
//     border-radius: 7px;
//     margin-top: 20px;
//     transition: .8s ease;
// }
// header button a {
//     color: #fff ;
//     font-size: 19px;
//     transition: .8s ease;
// }
// header button:hover a {
//     color: #fff;
// }
// header button:hover {
//     opacity: .6;
// }

// header .header-img-box {
//     position: relative;
//     max-width: 100%;
//     height: auto;
// }
// header .header-img img {
//     max-width: 100%;
//     width: 430px;
//     height: auto;
//     margin-left: 120px;
//     animation: mover 2s infinite alternate;
// }
// @keyframes mover {
//     0% {
//         transform: translateY(0px);
//     }
//     100% {
//         transform: translateY(-10px);
//     }
// }
// header .header-img-box .shape2 {
//     position: absolute;
//     top: 45px;
//     left: 0%;
//     width: 100px;
//     animation: mover 1.5s infinite alternate;
// }
// header  .shape3 {
//     position: absolute;
//     top: 0%;
//     left:25% ;
//     width: 60px;
//     animation:  1s infinite alternate;
// }
// header  .shape1 {
//     position: absolute;
//     bottom: 8%;
//     left:-15% ;
//     width: 80px;
//     animation: mover 1s infinite alternate;
// }


////////////////////////////////////////////////////


