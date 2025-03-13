import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Navbar from "./Navbar"
import Errorpage from "./Pages/ErrorPage"



// Define the router
const router = createBrowserRouter([
  
    

      {
        path: "/",
        element: <Home/>,
        errorElement: <Errorpage/>
      },
      {
        path: "/home",
        element: <Home/>,
        errorElement: <Errorpage/>
      },
      {
        path: "/about",
        element: <About/>,
        errorElement: <Errorpage/>
      },
      {
        path: "/contact",
        element: <Contact/>,
        errorElement: <Errorpage/>
      },
      {
        path: "/services",
        element: <Services/>,
        errorElement: <Errorpage/>
      },
      
    
    
    

]);

// Get the root element
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* <Navbar/> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
