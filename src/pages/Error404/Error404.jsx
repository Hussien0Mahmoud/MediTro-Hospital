import { Link } from 'react-router-dom'
import './Error404.css'
import Banner from './../../Components/Banner/Banner';

export default function Error404() {
  return (
    <>
    <Banner title="Page Not Found" smtitle="Erorr-404"/>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12">
          <div className="content">
            <h2>4<span></span>4</h2>
            <h3>The Page you were looking for, could not be found.</h3>
            <p>The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.</p>
              <div className="btn-div">
                <button className="btn btn-primary"> <Link to="/">Back To Home</Link> </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
