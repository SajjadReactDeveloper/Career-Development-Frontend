import React from 'react'
import Sidebar from '../../../user/Navbar/Sidebar'
import ViewJobs from './ViewJobs'

export default function ViewJobMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <ViewJobs />
        </div>
      </div>
      </div>
  )
}
