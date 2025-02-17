import React from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchHeader = () => {
  return (
    <div className="flex justify-between items-center p-4  w-full">
      {/* Left Section: Search, Filters, Rows, and July */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative flex-grow max-w-xs">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-black" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-sm focus:outline-none"
          />
        </div>

        {/* Filters Button */}
        <button className="px-4 py-2 bg-white rounded-full text-sm text-black font-medium flex items-center gap-2">
          Filters
        </button>

        {/* Rows Dropdown */}
        <button className="px-4 py-2 bg-white rounded-full text-black text-sm font-medium flex items-center gap-2">
          Rows
          <ChevronDown className="h-4 w-4" />
        </button>

        {/* July Dropdown */}
        <button className="px-4 py-2 bg-white rounded-full text-black text-sm font-medium flex items-center gap-2">
          July
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Right Section: Export and Detailed View */}
      <div className="flex items-center gap-4">
        {/* Export Button */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
          Export
        </button>

        {/* Detailed View Dropdown */}
        <button className="px-4 py-2 bg-white rounded-full text-sm text-black font-medium flex items-center gap-2">
          Detailed View
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
