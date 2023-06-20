import React from "react";
import { Frameicon } from "../../customlogo/logo";

const ServiceManuals = () => {
  return (
    <div
      className="card"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        width: "300px",
        height:"300px"
      }}
    >
      <div className="card-body p-4">
        <h2 className="card-title text-blue-800 text-3xl font-medium  text-center mb-4">
          Manuals
        </h2>
        <div className="flex items-center justify-center mb-4">
          <Frameicon />
        </div>
        <div className="flex flex-col items-center">
          <button
            className="card-title bg-dark-blue text-white  mb-2"
            style={{ width: "233px", height: "48px" }}
          >
            User Manual
          </button>
          <button
            className="card-title bg-dark-blue text-white"
            style={{ width: "233px", height: "48px" }}
          >
            Services Manual
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceManuals;
