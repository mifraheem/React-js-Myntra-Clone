import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "50px", height: "50px", margin: "100px 0px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
