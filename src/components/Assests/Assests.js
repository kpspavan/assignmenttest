import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import Navbar from "../navbar/Navbar";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(CategoryScale);
Chart.register(ChartDataLabels);

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 15000,
    userLost: 10,
  },
  {
    id: 1,
    year: 2016,
    userGain: 45000,
    userLost: 10,
  },
  {
    id: 1,
    year: 2016,
    userGain: 30000,
    userLost: 10,
  },
  {
    id: 1,
    year: 2016,
    userGain: 10000,
    userLost: 10,
  },
];

function Assests() {
  const [chartData, setChartData] = useState({
    labels: ["1st Section", "2nd Section", "3rd Section", "4th Section"],
    datasets: [
      {
        data: [15000, 45000, 30000, 10000],
        backgroundColor: ["#EA7317", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="card" style={{   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width:'350px', backgroundColor: "white" }}>
      <div className="card-body   flex items-center flex-col justify-center ">
        <h2 className="card-title text-blue-800 text-3xl font-medium mb-4  " style={{ textAlign: "center" }}>Total Assets</h2>
        <Doughnut
          data={chartData}
          options={{
            plugins: {
              datalabels: {
                display: false,
              },
              legend: {
                display: false,
              },
            },
            layout: {
              padding: {
                top: 20,
                bottom: 20,
              },
            },
          }}
        />
        <div className="chart-labels">
          <div className="chart-label">
            <span className="chart-color" style={{ backgroundColor: "#FF6384" }}></span>
          </div>
          <div className="chart-label">
            <span className="chart-color" style={{ backgroundColor: "#36A2EB" }}></span>
          </div>
          <div className="chart-label">
            <span className="chart-color" style={{ backgroundColor: "#FFCE56" }}></span>
          </div>
          <div className="chart-label">
            <span className="chart-color" style={{ backgroundColor: "#4BC0C0" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assests;
