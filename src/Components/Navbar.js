import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'
function Navbar({FetchHandler}) {
  const navigate=useNavigate();
  const searchvalue=useRef('');
  const navigatehandler=()=>{
    navigate('/searched');
  }
  const searhchandler=async(e)=>{
      e.preventDefault();
     
      const key=  searchvalue.current.value;
    FetchHandler(key)
   
    console.log(key)
   }
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> GB News</Link>
    {/* <img className="navbar-brand logo-head" src='logo.png' alt=''></img> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link>  </li>
       <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link>  </li>
       <li className="nav-item"><Link className="nav-link" to="/Science">Science</Link>  </li>
       <li className="nav-item"><Link className="nav-link" to="/Sports">Sports</Link>  </li>
       <li className="nav-item"><Link className="nav-link" to="/Technology">Technology</Link>  </li>
       <li className="nav-item"><Link className="nav-link" to="/US News">US News</Link>  </li>
       
      </ul>
      <form className="d-flex" onSubmit={searhchandler}>
        <input className="form-control me-2" type="text"  ref={searchvalue} placeholder="Search" aria-label="Search" onChange={navigatehandler}/>
        <button className="btn btn-outline-dark " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
