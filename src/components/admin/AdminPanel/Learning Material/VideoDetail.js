import React from "react";
import { useLocation } from "react-router-dom";
import Iframe from "react-iframe";

export default function VideoDetail() {
  const location = useLocation();
  const video = location.state;
  console.log("Video: ", video.video);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 300, marginLeft: -150 }}>
      <Iframe
      url={video.video}
      position="absolute"
      width="640px"
      height="320px"
      id="myId"
      className="myClassname"
      display = "block"
      allow-same-origin
    />
    </div>
  );
}
