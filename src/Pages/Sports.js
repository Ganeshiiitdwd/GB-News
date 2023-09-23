import React from 'react'
import Navbar from '../Components/Navbar'
import News from '../Components/News'
function Sports() {
  return (
    <div>
      <Navbar/>
      <News category='Sports' Country='in'/>
    </div>
  )
}

export default Sports
