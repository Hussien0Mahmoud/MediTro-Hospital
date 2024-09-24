import AboutCards from "../../Components/AboutCards/AboutCards";
import Banner from "../../Components/Banner/Banner";
import DoctorsList from "../../Components/Doctors/DoctorsList";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import HomeAbout2 from "../../Components/HomeAbout2/HomeAbout2";


export default function About() {
  return (
    <>
      <Banner title="About Us" smtitle="About Us"/>

      <HomeAbout/>
      <AboutCards/>
      <DoctorsList/>
      {/* <HomeAbout2/> */}
    </>
  )
}
