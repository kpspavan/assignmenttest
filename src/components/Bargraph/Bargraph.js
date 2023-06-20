import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 5,
    userLost: 10,
    recorded: 8,
    cleared: 2,
  },
  {
    id: 2,
    year: 2017,
    userGain: 10,
    userLost: 0,
    recorded: 6,
    cleared: 4,
  },
  {
    id: 3,
    year: 2018,
    userGain: 15,
    userLost: 5,
    recorded: 7,
    cleared: 3,
  },
  {
    id: 4,
    year: 2019,
    userGain: 20,
    userLost: 7,
    recorded: 9,
    cleared: 1,
  },
  {
    id: 5,
    year: 2020,
    userGain: 25,
    userLost: 9,
    recorded: 5,
    cleared: 5,
  },
];
const Bargraph = () => {
  const [activeTab, setActiveTab] = useState("Days");
  const [activeTab1, setActiveTab1] = useState("Recorded");

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users",
        data: Data.map((data) => data.userGain - data.userLost),
        backgroundColor: "yellow",
        borderColor: "black",
       
      },
    ],
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    let newLabels = [];
    let newData = [];

    if (tab === "Days") {
      newLabels = Data.map((data) => data.year);
      newData = Data.map((data) => data.userGain - data.userLost);
    } else if (tab === "Weeks") {
      newLabels = ["week1", "week2", "week3", "week4", "week5"];
      newData = [5, 10, 15, 20, 25];
    } else if (tab === "Months") {
      newLabels = ["Jan-Mar", "Mar-Jun", "Jun-Sep", "Sep-Dec"];
      newData = Data.map((data) => data.userGain - data.userLost);
    } else if (tab === "Custom") {
      // As per Now iam not providing data
    }

    setChartData((prevState) => ({
      ...prevState,
      labels: newLabels,
      datasets: [
        {
          ...prevState.datasets[0],
          data: newData,
        },
      ],
    }));
  };

  const handleTabClick1 = (tab) => {
    setActiveTab1(tab);

    let newData = [];

    if (tab === "Recorded") {
      newData = Data.map((data) => data.recorded);
    } else if (tab === "Cleared") {
      newData = Data.map((data) => data.cleared);
    }

    setChartData((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data: newData,
        },
      ],
    }));
  };

  const renderData = () => {
    if (activeTab === "Days") {
      return (
        <div className="flex justify-evenly">
          <div>
            <h1>
              <span className="text-blue-800">x-axis</span>:Days
            </h1>
          </div>
          <div>
            <h1>
              <span className="text-blue-800">Y-axis</span>:Incidents
            </h1>
          </div>
        </div>
      );
    } else if (activeTab === "Weeks") {
      return (
        <div className="justify-evenly flex ">
          <div>
            <h1>
              <span className="text-blue-800">x-axis</span>:Weeks
            </h1>
          </div>
          <div>
            <h1>
              <span className="text-blue-800">Y-axis</span>:Incidents
            </h1>
          </div>
        </div>
      );
    } else if (activeTab === "Months") {
      return (
        <div className="flex justify-center">
          <div>
            <h1>
              <span className="text-blue-800">x-axis</span>:Months
            </h1>
          </div>
          <div>
            <h1>
              <span className="text-blue-800">Y-axis</span>:Incidents
            </h1>
          </div>
        </div>
      );
    } else if (activeTab === "Custom") {
      return <div>Display Custom Data</div>;
    } else if (activeTab1 === "Recorded") {
      return <div>Display Recorded Data</div>;
    } else if (activeTab1 === "Cleared") {
      return <div>Display Cleared Data</div>;
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <div
      className="card  "
      style={{
        paddingTop: "30px",
        paddingLeft: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        paddingRight: "30px",
        paddingBottom: "30px",
        width:"1465px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <div>
        <h1 className="text-blue-800 text-3xl font-medium mb-4 ">
          Total Incidents Recorded
        </h1>
        <div className="mb-2">
          <div>
            <div className="tab-buttons flex justify-between border-b border-b-transparent border-gray-300">
              <div>
                <button
                  className={`tab-button font-normal pl-6 pr-6 text-base p-3 ${
                    activeTab === "Days" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor: activeTab === "Days" ? "#004F95" : "white",
                    color: activeTab === "Days" ? "white" : "#004F95",
                    border: "1px solid #7A7A7A",
                    borderTopLeftRadius:"10px",
                    borderBottomLeftRadius:"10px"
                  }}
                  onClick={() => handleTabClick("Days")}
                >
                  Days
                </button>
                <button
                  className={`tab-button font-normal pl-6 pr-6  text-base p-3 ${
                    activeTab === "Weeks" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === "Weeks" ? "#004F95" : "white",
                    color: activeTab === "Weeks" ? "white" : "#004F95",
                    border: "1px solid #7A7A7A",
                  }}
                  onClick={() => handleTabClick("Weeks")}
                >
                  Weeks
                </button>
                <button
                  className={`tab-button font-normal pl-6 pr-6  text-base p-3 ${
                    activeTab === "Months" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === "Months" ? "#004F95" : "white",
                    color: activeTab === "Months" ? "white" : "#004F95",
                    border: "1px solid #7A7A7A",
                  }}
                  onClick={() => handleTabClick("Months")}
                >
                  Months
                </button>
                <button
                  className={`tab-button font-normal pl-6 pr-6  text-base p-3 ${
                    activeTab === "Custom" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab === "Custom" ? "#004F95" : "white",
                    color: activeTab === "Custom" ? "white" : "#004F95",
                    border: "1px solid #7A7A7A",
                    borderTopRightRadius:"10px",
                    borderBottomRightRadius:"10px"
                  }}
                  onClick={() => handleTabClick("Custom")}
                >
                  Custom
                </button>
              </div>
              <div>
                <button
                  className={`tab-button font-normal pl-6 pr-6   text-base p-3 ${
                    activeTab1 === "Recorded" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab1 === "Recorded" ? "#004F95" : "white",
                    color: activeTab1 === "Recorded" ? "white" : "#004F95",
                    border: "1px solid #7A7A7A",
                    borderTopLeftRadius:"10px",
                    borderBottomLeftRadius:"10px"
                  }}
                  onClick={() => handleTabClick1("Recorded")}
                >
                  Recorded
                </button>
                <button
                  className={`tab-button font-normal pl-6 pr-6  text-base p-3 ${
                    activeTab1 === "Cleared" ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      activeTab1 === "Cleared" ? "#004F95" : "white",
                    color: activeTab1 === "Cleared" ? "white" : "#004F95",
                    border: "1px solid #7A7A7A",
                    borderTopRightRadius:"10px",
                    borderBottomRightRadius:"10px"
                  }}
                  onClick={() => handleTabClick1("Cleared")}
                >
                  Cleared
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Bar data={chartData} options={options} />
      </div>
      <div className="mt-5">{renderData()}</div>
    </div>
  );
};

export default Bargraph;
