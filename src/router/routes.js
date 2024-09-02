import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";
// import React from 'react'

const routes = [
    {path: '/admin', name: 'Admin' },

    { path: '/dashboard', element: Dashboard, name: 'Dashboard' },
    { path: '/profile', element: Profile, name: 'Profile' },
]


export default routes;
