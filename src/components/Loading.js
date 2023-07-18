import React from "react";
import "./loader.css";

function Loading() {
  return (
    <div className="lds-ellipsis" style={{ marginTop: "5rem" }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
