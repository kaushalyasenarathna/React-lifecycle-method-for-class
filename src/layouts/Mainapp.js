import React from 'react'
import Nav from './Nav'

const Mainapp = ({children}) => {
  return (
    <div>
  <Nav/>
  <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="col-md-8 col-lg-10 mt-5 mb-5">
          {children}
    </div>
  </div>
  </div>
   
  )
}

export default Mainapp
