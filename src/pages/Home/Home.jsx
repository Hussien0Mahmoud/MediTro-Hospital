
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
// import { Link } from 'react-router-dom'
// import headerimg  from '../../assets/Home-Images/doctor1.png'
// import shape2  from '../../assets/Home-Images/shape-2.png'
// import shape3  from '../../assets/Home-Images/shape-3.png'
// import shape1  from '../../assets/Home-Images/shape-1.png'
// import TestPage from '../../Components/test/TestPage'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import HomeLinks from '../../Components/HomeLinks/HomeLinks'
import HomeAbout2 from '../../Components/HomeAbout2/HomeAbout2'
import HomeAbout from '../../Components/HomeAbout/HomeAbout'
import CarouselSide from '../../Components/Carousel/Carousel'
export default function Home() {
  return (
    <>
    <HomeHeader/>
    <HomeAbout/>
    <HomeLinks/>
    <HomeAbout2/>
    <CarouselSide/>
    {/* <TestPage/> */}
    </>
  )
}
