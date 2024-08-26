import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <ul class="nav flex-column bg-primary p-3">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Footer</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    sdfsdf
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
