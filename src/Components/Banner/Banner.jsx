import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import shapePlus from '../../assets/Banner-imges/shape-plus.png'
import shapeCircle from '../../assets/Banner-imges/shape-circle.png'

export default function Banner(props) {
  return (
    <section className="banner ">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 banner-container">
                    <h2>{props.title}</h2>
                    <button className="btn btn-primary">
                        <Link to="/">
                        <FontAwesomeIcon icon={faHome}/>Home
                        / {props.smtitle}
                        </Link>
                    </button>
                    {/* <li>
                        <Link to="/">
                        <FontAwesomeIcon icon={faHome}/>Home
                        / {props.smtitle}
                        </Link>
                    </li> */}
                    <img src={shapeCircle} alt=" Shape-imge-circle" className="shape-circle-img" />
                    <img src={shapePlus} alt=" Shape-imge-circle" className="shape-plus-img" />
                </div>
            </div>
        </div>
    </section>
  )
}
