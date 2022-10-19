import React from 'react'
import Newsitems from "./Newsitems";


import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";


export default function Newsdiv(){



  const general = createBrowserRouter([
    {
      path: "/",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines</h1>
    
     
       <hr />
       <Newsitems country="in" category = "general" />
      
      </div>,
    }, {
      path: "/business",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines-business</h1>
       <hr />
       <Newsitems country="in" category = "business" />
      
      </div>,
    },
    {
      path: "/entertainment",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines-entertainment</h1>
       <hr />
       <Newsitems country="in" category = "entertainment" />
      
      </div>,
    },{
      path: "/general",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines-general</h1>
     
       <hr />
       <Newsitems country="in" category = "general" />
      
      </div>,
    },{
      path: "/health",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines-health</h1>
       <hr />
       <Newsitems country="in" category = "health" />
      
      </div>,
    },{
      path: "/science",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines-science</h1>
       <hr />
       <Newsitems country="in" category = "science" />
      
      </div>,
    },{
      path: "/sports",
      element:  <div className="container">
      <h1 className="heading">NewsZone-Top Headlines-sports</h1>
       <hr />
       <Newsitems country="in" category = "sports" />
      
      </div>,
    },{
      path: "/technology",
      element:  <div className="container">
      <h1 className=" heading">NewsZone-Top Headlines-technology</h1>
       <hr />
       <Newsitems country="in" category = "technology" />
      
      </div>,
    }
  ]);


  return (
   
    <>
  
  <React.StrictMode>
    <RouterProvider router={general} />
    
  </React.StrictMode>

    
          

         
     
    
    
     </>
  )
}
