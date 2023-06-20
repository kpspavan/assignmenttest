import React from "react";

function HorizontalBarChart1() {
  const Calibrated = 56;
  const NotCalibrated = 46;

  const NotRequired = 36;

  return (
    <div
      className="card"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div className="card-body">
        <div
          className="chart-container"
          style={{ height: "300px", width: "650px" }}
        >
          <h2 className="text-center text-blue-800 text-3xl font-medium mb-4">
            Calibrated
          </h2>
          <div className="flex justify-between flex-col">
            <div className="flex items-start flex-col-reverse pb-10 pl-5 ">
             
              <div className="flex items-center">
                <div
                  className="bg-dark-cyan h-7   "
                  style={{ width: `${Calibrated}vh` }}
                ></div>
                <span className="ml-5">{Calibrated}</span>
              </div>

              <span className="ml-2  text-blue-800 ">Calibrated</span>
            </div>
            <div className="flex items-start  flex-col-reverse pb-10 pl-5  ">
             
              <div className="flex items-center">
                <div
                  className="bg-dark-orange h-7   "
                  style={{ width: `${NotCalibrated}vh` }}
                ></div>
                <span className="ml-5">{NotCalibrated}</span>
              </div>

              <span className="ml-2 text-blue-800  ">Not Calibrated</span>
            </div>
            <div className="flex items-start  flex-col-reverse pb-10 pl-5  ">
              
              <div className="flex items-center" >
                <div
                  className="bg-dark-yellow h-7    "
                  style={{ width: `${NotRequired}vh` }}
                ></div>
                <span className="ml-5">{NotRequired}</span>
              </div>
              <span className="ml-2 text-blue-800 ">Not Required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBarChart1;
