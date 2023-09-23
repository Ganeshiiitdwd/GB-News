//uncaught typeerror: cannot destructure property 'basename' of 'react__webpack_imported_module_0__.usecontext(...)' as it is null 
//you might get such error it is due to u have not followed this way and directly used Link somewhere
import React from 'react'

import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Science from './Pages/Science'
import Business from './Pages/Business'
import Sports from './Pages/Sports'
import Technology from './Pages/Technology'
import Entertainment from './Pages/Entertainment'
import US from './Pages/US'
import Searched from './Pages/Searched'
function App() {
  const router=createBrowserRouter([
   {path:'/',element:<Home/>},
   {path:'/Science',element:<Science/>},
   {path:'/Business',element:<Business></Business>},
   {path:'/Sports',element:<Sports/>},
   {path:'/Technology',element:<Technology/>},
   {path:'/Entertainment',element:<Entertainment/>},
   {path:'/US News',element:<US/>},
   {path:'/searched',element:<Searched/>}

   
  

  ])
  return (
    <div>
    {/* we can't do it as Navbar is not  the route element */}
   {/* <Navbar/> */}
    {/* <News category='Science'/> */}
   <RouterProvider router={router}/>
    </div>
 
  )
}

export default App


