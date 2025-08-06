import React from "react";

const StatsCard = ({ status, count, label }) => {
  const colorClasses = {
    pending: "bg-orange-50 text-orange-600 border-orange-200",
    completed: "bg-green-50 text-green-600 border-green-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
  };

  const statusLabels = {
    pending: "Pending",
    completed: "Completed",
    rejected: "Rejected",
  };

  return (
    <>
      <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col justify-between md:flex-row md:items-center md:gap-20 gap-4">
          <div>
            <span
                className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${colorClasses[status]}`}
            >
                <span className="text-lg leading-none">•</span>
                {statusLabels[status]}
            </span>
          </div>

          <div className="flex items-baseline gap-6">
            <div className="text-3xl font-bold text-gray-900">{count}</div>
            <div className="text-sm text-gray-500">{label}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
