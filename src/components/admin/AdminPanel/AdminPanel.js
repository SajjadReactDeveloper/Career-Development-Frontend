import React from 'react'
import Dashboard from './Dashboard';
import AdminSidebar from '../../user/Navbar/AdminSidebar'

export default function AdminPanel() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <AdminSidebar />
        </div>
        <div className="col-9">
            {/* <AddJob /> */}
            <Dashboard data = "Admin" />
        </div>
      </div>
    </div>
  );
}
