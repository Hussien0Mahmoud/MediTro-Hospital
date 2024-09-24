import { Outlet } from "react-router-dom";
import Navbars from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


export default function Root() {
  return (
    <>
      <Navbars/>
      <Outlet/>
      <Footer/>
    </>
  )
}
