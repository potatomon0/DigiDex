import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <Link to='/'><div>Main</div></Link>
        <Link to='/List'><div>List</div></Link>
    </div>
  )
}

export default NavBar