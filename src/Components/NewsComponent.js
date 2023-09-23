// import moment from 'moment/moment'
import React from 'react'

function NewsComponent({title,Imgurl,desc,link,Author,Timing,source}) {
  //  let date=new Date(Timing)
  // const formattedDate = date.toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric"
  // })
//  let formattedDate=moment(Timing).format('DD/MM/YYYY HH:mm')
//this was one of the method to display date but the better one is given

  return (
    <div className='my-3'>
       
      <div className="card" style={{width: "18rem"}}>
      <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%"}}>
    {source}  </span>
  <img src={Imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <p class="card-text"><small class="text-muted">By {Author} on {new Date(Timing).toGMTString()}</small></p>
    <a href={link} rel='noreferrer' target='_blank'  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
    </div>
  )
}

export default NewsComponent
