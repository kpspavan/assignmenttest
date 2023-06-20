import React from "react";

function HorizontalBarChart() {
  const clearedValue = 26;
  const notClearedValue = 16;

  return (
    <div
      className="card  "
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        display: "flex",
        width:'350px',
        height:"400px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div className="card-body">
        <div
          className="chart-container"
          style={{ height: "352px", width: "300px" }}
        >
          <h2 className="text-center text-blue-800 pb-5 text-3xl font-medium mb-4">
            Horizontal Bar Chart
          </h2>
          <div className="flex justify-between flex-col">
            <div className="flex items-start flex-col-reverse pb-8 pl-5 ">
              <div className="flex items-center">
                <div
                  className="bg-green-500 w-full h-14 rounded-2xl"
                  style={{ width: `${clearedValue}vh` }}
                ></div>{" "}
                <span className="ml-2    ">{clearedValue}</span>
              </div>

              <span className="ml-2">Cleared</span>
            </div>
            <div className="flex items-start  flex-col-reverse pb-10 pl-5  ">
              <div className="flex items-center" >
                <div
                  className="bg-dark-red h-14 rounded-2xl"
                  style={{ width: `${notClearedValue}vh` }}
                ></div>
                <span className="ml-2    ">{notClearedValue}</span>
              </div>

              <span className="ml-2">Not Cleared</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalBarChart;
