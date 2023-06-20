import React from "react";

function DepartmentBar() {
  const labarotaryProgress = 80;
  const radiologyProgress = 60;
  const icuProgress = 90;
  const operationTheatreProgress = 50;
  const opdProgress = 70;

  return (
    <div
      className="card"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        backgroundColor: "white",
        width: "404px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div className="card-body">
        <div className="chart-container">
          <h2 className="text-center text-blue-800 text-3xl font-medium mb-4">
            Departments
          </h2>
          <div className="absolute left-5">
            <div
              className="h-full absolute top-0 left-0 rounded-l-full"
              style={{ width: "68px", height: "20px", backgroundColor: "#004F95" }}
            ></div>
            <div
              className="h-full absolute top-0 left-0 rounded-l-full"
              style={{ width: "68px", height: "20px", backgroundColor: "#3DA5D9", marginLeft: "72px" }}
            ></div>
            <div
              className="h-full absolute top-0 left-0 rounded-l-full"
              style={{ width: "68px", height: "20px", backgroundColor: "#73BFB8", marginLeft: "144px" }}
            ></div>
            <div
              className="h-full absolute top-0 left-0 rounded-l-full"
              style={{ width: "68px", height: "20px", backgroundColor: "#FEC601", marginLeft: "216px" }}
            ></div>
            <div
              className="h-full absolute top-0 left-0 rounded-l-full"
              style={{ width: "68px", height: "20px", backgroundColor: "#EA7317", marginLeft: "288px" }}
            ></div>
          </div>

          <div className="flex flex-col pt-10">
            <ProgressBarItem label="Labarotary" color="#004F95" progress={labarotaryProgress} />
            <ProgressBarItem label="Radiology" color="#3DA5D9" progress={radiologyProgress} />
            <ProgressBarItem label="ICU" color="#73BFB8" progress={icuProgress} />
            <ProgressBarItem
              label="Operation Theatre"
              color="#FEC601"
              progress={operationTheatreProgress}
            />
            <ProgressBarItem label="OPD" color="#EA7317" progress={opdProgress} />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-blue-800 border-b-2 border-blue-500 font-medium">See More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBarItem({ label, progress, color }) {
  return (
    <div className="flex flex-col p-3">
      <div className="flex items-center justify-between">
        <span>{label}</span>
        <span className="text-xs">{progress}%</span>
      </div>
      <div className="relative w-full">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
        <div className="absolute top-0 left-0 w-0.5 h-2 bg-gray-300"></div>
      </div>
    </div>
  );
}

export default DepartmentBar;
