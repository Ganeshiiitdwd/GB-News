import React from 'react'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
function Home() {
  return (
    <div>
      <Navbar/>
      <News category='General' Country='in'/>
    </div>
  )
}

export default Home
