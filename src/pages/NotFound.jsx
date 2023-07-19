import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen my-8 md:my-0">
      <div className="card lg:card-side bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Page Not Found!</h2>
        </div>
        <div
          className="card-body"
          style={{
            backgroundColor: "blue",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Link to="/">
            <h2 className="">Go Home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
