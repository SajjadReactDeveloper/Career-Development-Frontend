import React from 'react'
import Dashboard from './admin/AdminPanel/Dashboard'
import Sidebar from './user/Navbar/Sidebar'

export default function UserDashboard() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <Dashboard />
        </div>
      </div>
    </div>
  )
}
