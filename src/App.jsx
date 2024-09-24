
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

// import Navbars from './Components/Navbar/Navbar'
import Home from './pages/Home/Home';

import Error404 from './pages/Error404/Error404';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About'
import Root from './Root/';
import Booking from './pages/Booking/Booking';

const BrowserRouter=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error404/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/booking',
        element:<Booking/>
      },
      {
        path:'/error404',
        element:<Error404/>
      },
    ]
  }
])

function App() {
  
  return (
    
    <RouterProvider router={BrowserRouter}/>
    
  );
}

export default App;
