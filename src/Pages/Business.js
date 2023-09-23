import React from 'react'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
function Business() {
  return (
    <div>
       <Navbar/>
      <News category='Business' Country='in'/>
    </div>
  )
}

export default Business
