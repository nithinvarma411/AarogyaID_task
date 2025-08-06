import React, { useState, useEffect } from "react";
import axios from "axios";
import StatsCard from "./StatsCard";

const ExecutionOverview = () => {
  const [stats, setStats] = useState([
    { status: "pending", count: 0, label: "Files queued" },
    { status: "completed", count: 0, label: "Files succeeded" },
    { status: "rejected", count: 0, label: "Files failed" },
  ]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}api/document/calculate`); // update route as needed
        const data = response.data;

        setStats([
          { status: "pending", count: data.Pending || 0, label: "Files queued" },
          { status: "completed", count: data.Completed || 0, label: "Files succeeded" },
          { status: "rejected", count: data.Rejected || 0, label: "Files failed" },
        ]);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 text-md text-gray-700">
          <span>Document AI</span>
          <span>/</span>
          <span className="text-red-600">Review</span>
        </div>

        <div className="flex items-center space-x-2 text-sm font-medium bg-gray-200 p-1">
          <button className="px-3 py-1 rounded bg-white">Dashboard</button>
          <button className="px-3 py-1 rounded text-gray-500 hover:text-gray-700 transition">Table</button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Executions overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExecutionOverview;
