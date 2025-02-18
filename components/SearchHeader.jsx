import React from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4  sm:w-full gap-4 ">
      <div className="flex flex-wrap items-center gap-2  sm:gap-4 w-full sm:w-auto justify-start">
        <div className="relative flex-grow max-w-xs w-full sm:w-auto">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-black" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" w-64 sm:w-64 pl-10 pr-4 py-2 rounded-full bg-white text-sm focus:outline-none border border-gray-300"
          />
        </div>
        <button className="px-2 py-2 rounded-full text-xs text-gray-600 font-medium items-center gap-2  hidden sm:flex">
          Filters
        </button>
        <button className="px-2 py-2 border border-gray-300 bg-white rounded-full text-black text-xs font-medium flex items-center gap-2">
          Rows
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="px-4 py-2 border border-gray-300 bg-white rounded-full text-black text-xs font-medium flex items-center gap-2">
          July
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto  sm:justify-end">
        <button className="px-4 py-2 flex justify-center items-center gap-2 bg-blue-600 text-white rounded-full text-xs font-medium">
          Export
          <ChevronDown className="h-4 w-4" />
        </button>
        <button className="px-4 py-2 bg-white rounded-full border border-gray-300 text-xs text-black font-medium flex items-center gap-2">
          Detailed View
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default SearchHeader;
