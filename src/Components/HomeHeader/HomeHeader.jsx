import "./HomeHeader.css";

import { Link } from "react-router-dom";
import headerimg from "../../assets/Home-Images/doctor1.png";
import shape2 from "../../assets/Home-Images/shape-2.png";
import shape3 from "../../assets/Home-Images/shape-3.png";
import shape1 from "../../assets/Home-Images/shape-1.png";
import shape4 from "../../assets/Home-Images/shape-4.png";

export default function HomeHeader() {
  return (
    <header>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className=" col-md-6 col-lg-6">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button>
              <Link to="/about">Read More</Link>
            </button>
            <img src={shape3} alt="Header-Image-Shape" className="shape3" />
            <img src={shape1} alt="Header-Image-Shape" className="shape1" />
            <img src={shape4} alt="Header-Image-Shape" className="shape4" />
          </div>
          <div className=" col-md-6 col-lg-6 ">
            <div className="header-img-box">
              <div className="header-img">
                <img src={headerimg} alt="Header-Image" />
              </div>
              <img src={shape2} alt="Header-Image-Shape" className="shape2" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
