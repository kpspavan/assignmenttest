import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

import Bargraph from "../Bargraph/Bargraph";
import PieChart from "../Piechat/Piechart";
import Service from "../Service/Service";
import Assests from "../Assests/Assests";
import HorizontalBarChart from "../Incidentmanagment/Incidentmanagent";
import DepartmentBar from "../Departments/Departments";
import OneLineChart from "../Linechart/Linechart";
import HorizontalBarChart1 from "../Callibrated/Callibrated";
import ServiceManuals from "../Manulas/Manuals";
import Protected from "../Protected/Protected";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="p-7 ml-10">
            <div className="flex items-center justify-between ">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <FaSearch className="text-gray-500" />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: "837px",
                    height: "36px",
                    borderRadius: "50px",
                  }}
                  className="pl-10 w-full pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="flex">
                <div>
                  <button
                    style={{
                      marginLeft: "3px",
                      backgroundColor: "#004F95",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "10px ",
                    }}
                  >
                    <AiOutlinePlusCircle className="mr-1" />
                    Add New
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "#004F95",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginLeft: "3px",
                      color: "white",
                      borderRadius: "10px ",
                    }}
                  >
                    Sign in
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      marginLeft: "3px",
                      backgroundColor: "#F78117",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      color: "white",
                      borderRadius: "10px ",
                    }}
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Bargraph />
            </div>
            <div className="flex items-center justify-evenly mb-10">
              <div className="mr-3 ml-3">
                <PieChart />
              </div>
              <div className="mr-3 ml-3">
                <Service />
              </div>
              <div className="mr-3 ml-3">
                <Assests />
              </div>
              <div className="mr-3 ml-3">
                <HorizontalBarChart />
              </div>
            </div>
            <div className="flex justify-around">
              <div className="mr-3 ml-3">
                <DepartmentBar />
              </div>
              <div className="ml-3">
                <OneLineChart />
              </div>
            </div>
            <div className="flex mt-12 justify-around">
              <div className="ml-3">
                <HorizontalBarChart1 />
              </div>
              <div className="ml-3">
                <ServiceManuals />
              </div>
              <div className="ml-3">
                <Protected />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
