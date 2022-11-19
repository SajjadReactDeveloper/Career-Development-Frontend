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

export default function Sidebars() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu>
          <MenuItem onClick={() => navigate("/")}> Dashboard </MenuItem>
          <MenuItem onClick={() => navigate("/viewTest")}> Mock Test </MenuItem>
          <MenuItem onClick={() => navigate("/viewPaper")}>
            {" "}
            Past Papers{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/viewVideo")}>
            View Videos
          </MenuItem>
          <MenuItem onClick={() => navigate("/viewFile")}>
            View Files
          </MenuItem>
          <MenuItem onClick={() => navigate("/discussion")}>
            {" "}
            Discussion Form{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/viewDiscussion")}>
            {" "}
            View Discussions{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/viewJobs")}>
            {" "}
            Job Listing{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/profile")}> Profile </MenuItem>
          <MenuItem onClick={handleLogout}> Logout </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
