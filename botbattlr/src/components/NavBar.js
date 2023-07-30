import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className='container nav' >
        <Link to="/bots-collection" className='link'>Bots Collection</Link>
        <Link to="/my-bots" className='link'>My Bots</Link>
    </div>
  )
}

export default NavBar