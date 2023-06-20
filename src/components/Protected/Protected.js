import React from "react";
import { Productedicon } from "../../customlogo/logo";

const Protected = () => {
  return (
    <div
      className="card"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        height: "300px",
        width: "342px",
      }}
    >
      <div className="card-body  flex flex-col items-center">
        <h2
          className="card-title text-blue-800 text-3xl font-medium mb-4"
          style={{ textAlign: "center", width: "150px" }}
        >
          Warranty
        </h2>
        <Productedicon />
      </div>
    </div>
  );
};

export default Protected;
