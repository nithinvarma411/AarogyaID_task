import React from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-900">Monitor</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <span>Select workflow</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;