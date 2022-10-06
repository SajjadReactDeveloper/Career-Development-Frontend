import React from 'react'
import Sidebar from '../../../user/Navbar/Sidebar'
import VideoDetail from './VideoDetail'

export default function ViewVideoDetailMain() {
  return (
    <div>
      <div className="row p-0 m-0">
        <div className="col-3 p-0 m-0" style={{height: '100vh'}}>
          <Sidebar />
        </div>
        <div className="col-9">
            <VideoDetail />
        </div>
      </div>
      </div>
  )
}
