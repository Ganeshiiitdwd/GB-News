import React from 'react'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
function Entertainment() {
  return (
    <div>
        <Navbar/>
      <News category='Entertainment' Country='in'/>
    </div>
  )
}

export default Entertainment
