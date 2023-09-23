import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import NewsSearch from '../Components/NewsSearch'
import './Searched.css'

function Searched() {
  const [search,setsearch]=useState('')
  const [render,setRender]=useState(true)
  const searchhandler=(key)=>{
    setsearch(key)
    if(key){
      setRender(false)
    }
  }
  

  return (
    <div>
      <Navbar FetchHandler={searchhandler}  />
      {render?<div className='search'><h2>Want to search Something?</h2> <h1>Search KeyWord</h1></div>: 
    <NewsSearch word={search}/>}
     
    </div>
  )
}

export default Searched
