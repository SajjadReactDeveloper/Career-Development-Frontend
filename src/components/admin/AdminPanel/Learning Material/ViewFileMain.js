import React from 'react'
import Sidebar from '../../../user/Navbar/Sidebar'
import ViewFiles from './ViewFiles'

export default function ViewFileMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <ViewFiles />
        </div>
      </div>
      </div>
  )
}
