import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    
      <div className='container-fluid sidebar p-5'>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/">Profile</Link></li>
            <li><Link to="/">Menu 1</Link></li>
        </ul>
      </div>
                     
          
  )
}

export default Sidebar
