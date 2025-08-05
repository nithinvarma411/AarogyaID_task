import React, { useState, useEffect } from "react";
import axios from "axios";
import { RefreshCw, Calendar } from "lucide-react";

const TableComponents = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchDocuments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_SERVER_URL
          }api/document/get?page=${currentPage}&limit=10`
        );
        setDocuments(response.data.documents);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setDocuments([]);
      }
      setLoading(false);
    };

    fetchDocuments();
  }, [currentPage]);

  const getStatusBadgeClasses = (status) => {
    if (status === "Pending") return "bg-orange-100 text-orange-800";
    if (status === "Completed") return "bg-green-100 text-green-800";
    if (status === "Rejected") return "bg-red-100 text-red-800";
  };

  const getEnvBadgeClasses = (env) => {
    const envLower = env.toLowerCase();
    if (envLower === "prod") return "bg-gray-900 text-white";
    if (envLower === "dev") return "bg-gray-100 text-gray-800";
  };

  // Date formatter function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayShort = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const monthShort = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${dayShort}, ${day} ${monthShort} ${year} ${hours}:${minutes}:${seconds}`;
  };

  const fetchLastUpdated = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}api/document/lastupdated`
      );
      setLastUpdated(response.data.lastUpdated);
    } catch (error) {
      console.error("Error fetching last updated time:", error);
      setLastUpdated(null);
    }
  };

  useEffect(() => {
    fetchLastUpdated();
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        {/* Table Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Executions table
            </h3>
            <span className="text-sm text-gray-500">Production | ID</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Last updated</span>
            <span className="font-medium text-gray-900 bg-gray-100 rounded-lg px-2 py-1">
              {lastUpdated ? formatDate(lastUpdated) : "Loading..."}
            </span>
              <button
                onClick={fetchLastUpdated}
                aria-label="Refresh last updated time"
                className="focus:outline-none border border-gray-300 rounded-lg p-1 hover:bg-gray-100"
              >
                <RefreshCw
                  size={16}
                  className="text-gray-400 hover:text-gray-600"
                />
              </button>
          </div>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="text-center py-6 text-gray-500">
            Loading documents...
          </div>
        ) : (
          <div className="overflow-x-auto p-2 rounded-[10px] border-3 border-gray-200">
            <table className="w-full ">
              <thead className="bg-gray-200">
                <tr className="border-b border-gray-400">
                  <th className="pl-3 text-left py-3 text-sm font-medium text-gray-500">
                    Execution ID
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">
                    File Name
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">
                    File Type
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Start Time</span>
                    </div>
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>End Time</span>
                    </div>
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">
                    Review Status ⇅
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500">
                    Environment ⇅
                  </th>
                  <th className="text-left py-3 text-sm font-medium text-gray-500"></th>
                </tr>
              </thead>

              <tbody>
                {documents.map((doc, index) => (
                  <tr
                    key={doc._id}
                    className={`hover:bg-gray-50 ${
                      index !== documents.length - 1
                        ? "border-b border-gray-400"
                        : ""
                    }`}
                  >
                    <td className="py-4 text-sm text-gray-900">{doc._id}</td>
                    <td className="py-4 text-sm text-gray-900">
                      {doc.fileName}
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                      {doc.fileType}
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                      {formatDate(doc.startTime)}
                    </td>
                    <td className="py-4 text-sm text-gray-600">
                      {doc.endTime}
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClasses(
                          doc.reviewStatus
                        )}`}
                      >
                        <span
                          className={`w-2 h-2 mr-1.5 rounded-full inline-block ${
                            doc.reviewStatus === "Pending"
                              ? "bg-orange-500"
                              : doc.reviewStatus === "Completed"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        />
                        {doc.reviewStatus}
                      </span>
                    </td>
                    <td className="py-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${getEnvBadgeClasses(
                          doc.environment
                        )}`}
                      >
                        {doc.environment}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="border border-gray-400 rounded-lg hover:bg-gray-100">
            <button
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </div>
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`px-3 py-2 text-sm rounded ${
                    page === currentPage
                      ? "bg-red-500 text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
          <div className="border border-gray-400 rounded-lg hover:bg-gray-100">
            <button
              className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponents;
