import React from "react";
import { Line } from "react-chartjs-2";

function OneLineChart() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "",
        data: [0, 3, 6, 5, 2, 6, 4, 7, 5],
        backgroundColor: "transparent",
        borderColor: "#004F95",
        borderWidth: 2,
        pointBackgroundColor: "#004F95",
        pointBorderColor: "#004F95",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        suggestedMin: 0,
        suggestedMax: 12,
        ticks: {
          callback: (value) => `${value} hr`,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      className="card"
      style={{
        width: "890px",
        height: "503px",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2 className="text-center text-blue-800 text-3xl font-medium mb-4 ">
        Total Downtime
      </h2>
      <div style={{ backgroundColor: "white",height:"36vh" }}>
        <Line data={data} options={options} />
      </div>
      <div className="flex justify-evenly">
        <div>
          <h1>
            <span className="text-blue-800 text-3xl">x-axis</span>: Months
          </h1>
        </div>
        <div>
          <h1>
            <span className="text-blue-800 text-3xl">Y-axis</span>: Incidents
          </h1>
        </div>
        <div>
          <h1>
            <p className="text-blue-800 text-2xl">Total Downtime</p>
            <p className="text-blue-800 text-2xl">12 Days 3h 20m</p>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OneLineChart;
