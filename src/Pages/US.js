import React from 'react'
import Navbar from '../Components/Navbar'
import News from '../Components/News'

export default function US() {
  return (
    <div>
      <Navbar/>
      <News Country='US' category='general'/>
    </div>
  )
}
