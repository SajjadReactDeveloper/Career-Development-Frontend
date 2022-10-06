import React from 'react'
import './sidebar.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const handleLogout = async() => {
        try {
            await axios.get('/user/logout');
            localStorage.removeItem('firstLogin');
            window.location.href = "/login"
        } catch (error) {
            window.location.href = "/";
        }
    }

export default function EmployerSidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem onClick={() => navigate("/")}> Dashboard </MenuItem>
          <MenuItem onClick={() => navigate("/addJob")}> Add Jobs </MenuItem>
          <MenuItem onClick={() => navigate("/viewApplicants")}>
            {" "}
            View Applicants{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/profile")}> Profile </MenuItem>
          <MenuItem onClick={handleLogout}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
