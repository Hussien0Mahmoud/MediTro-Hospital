import { Link } from 'react-router-dom'
import './HomeLinks.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

export default function HomeLinks() {
  return (
    <>
    <section className="works">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading-work">
                        <h5>Working Process</h5>
                        <h2>How we works?</h2>
                    </div>
                </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="work-box">
                            <div className="work-num">
                            01
                            </div>
                            <div className="work-content">
                                <h3>Make Appointmnet</h3>
                                <p>It is a long established fact that a reader will be distracted by 
                                    the readable content of.</p>
                            </div>
                            <Link to="/booking"><button>View More <span> <FontAwesomeIcon icon={faArrowRight} /> </span>  </button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="work-box fixed-color">
                            <div className="work-num">
                            02
                            </div>
                            <div className="work-content">
                                <h3>Take Treatment</h3>
                                <p>It is a long established fact that a reader will be distracted by 
                                    the readable content of.</p>
                            </div>
                            <Link to="/doctor"><button>View More <span> <FontAwesomeIcon icon={faArrowRight} /> </span>  </button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="work-box">
                            <div className="work-num">
                            03
                            </div>
                            <div className="work-content">
                                <h3>Registration</h3>
                                <p>It is a long established fact that a reader will be distracted by 
                                    the readable content of.</p>
                            </div>
                            <Link to="/contact"><button>View More <span> <FontAwesomeIcon icon={faArrowRight} /> </span>  </button></Link>
                            
                        </div>
                    </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
