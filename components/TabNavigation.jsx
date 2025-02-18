"use client";
import React, { useState } from "react";

const TabNavigation = () => {
  // Set "final" tab as default active
  const [activeTab, setActiveTab] = useState("final");

  const tabs = [
    { id: "admin", label: "Admin Teams (Admin)" },
    { id: "deps", label: "Dep Details (Admin)" },
    { id: "outage", label: "In Our Gage" },
    { id: "pipeline", label: "Pipeline Admin" },
    { id: "manage", label: "Manage Employees" },
    { id: "final", label: "Final Reports" },
    { id: "error", label: "Error Reports" },
  ];

  return (
    <div
      className=" bg-white border-b border-gray-200 w-full  
     "
    >
      <div className="max-w-full ">
        <nav className="flex justify-around items-center px-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                 py-2 text-xs font-medium rounded-t-lg 
                transition-colors duration-200 relative
                min-w-[120px] whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
          <button className="text-blue-800 font-bold text-xs">
            Attendance Module
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
