import React from 'react'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
function Science() {
  return (
    <div>
       <Navbar/>
      <News category='Science' Country='in'/>
    </div>
  )
}

export default Science
