import React from 'react'
import './dashboard.css'

export default function Dashboard(props) {
  console.log(props)
  return (
    <div style={{textAlign: 'center', marginTop: 50, fontSize: 30, marginLeft: -150}}>
      <img src="d.png" alt="" style={{ width: 500, height: 500 }} />
       <p> Welcome to {props.data} Dashboard</p>
    </div>
  )
}
