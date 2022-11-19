import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const handleLogout = async () => {
  try {
    await axios.get("/user/logout");
    localStorage.removeItem("firstLogin");
    window.location.href = "/login";
  } catch (error) {
    window.location.href = "/";
  }
};

export default function AdminSidebar() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar style={{ backgroundColor: "teal" }}>
        <Menu>
          <MenuItem onClick={() => navigate("/")}> Dashboard </MenuItem>
          <MenuItem onClick={() => navigate("/addTest")}>
            {" "}
            Add Mock Test{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/addPaper")}>
            {" "}
            Add Past Papers{" "}
          </MenuItem>
          <SubMenu label="Add Material">
            <MenuItem onClick={() => navigate("/addVideo")}>
              {" "}
              Add Video{" "}
            </MenuItem>
            <MenuItem onClick={() => navigate("/addFile")}> Add File </MenuItem>
          </SubMenu>
          <MenuItem onClick={() => navigate("/profile")}> Profile </MenuItem>
          <MenuItem onClick={handleLogout}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
