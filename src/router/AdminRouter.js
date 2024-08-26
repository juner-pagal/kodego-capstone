import {Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from '../admin/Dashboard';

export class AdminRouter extends Component {
  render() {
    return (
      <div>
        <>
            <Routes>
                <Route path='/admin-dashboard' element={<Dashboard />} />
            </Routes>
        </>
      </div>
    )
  }
}

export default AdminRouter
