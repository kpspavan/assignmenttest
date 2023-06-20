import React from "react";
import { Servicesectionicon } from "../../customlogo/logo";

const Service = () => {
  return (
    <div
      className="card"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        display: "flex",
        height: "400px",
        width: "350px",
        flexDirection: "column",
        alignItems: "center",
        
        padding: "1rem",
      }}
    >
      <h2
        className="card-title text-blue-800 text-3xl font-medium mb-4"
        style={{ textAlign: "center", width: "150px" }}
      >
        In service
      </h2>
      <div>
        <Servicesectionicon />
      </div>
      <div className="flex items-center mt-4">
        <div className="flex flex-col items-center mr-3 mt-5 ">
          <p className="card-title text-blue-800 font-medium ">Total services</p>
          <p className="card-title text-blue-800 font-bold">38</p>
        </div>
        <div className="flex flex-col items-center mr-3 mt-5 ">
          <p className="card-title text-blue-800 font-medium ">Open services</p>
          <p className="card-title text-blue-800 font-bold ">18</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
