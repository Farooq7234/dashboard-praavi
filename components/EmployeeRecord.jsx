import React from "react";

const EmployeeRecord = ({ employeeData }) => {
  return (
    <div className="bg-white w-full flex justify-between items-center  rounded-lg shadow-md p-4  h-fit">
      <div className="flex items-start gap-4 mb-4">
        {/* Employee Profile Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://placehold.co/200x200"
            alt={employeeData.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-black  text-lg">
              {employeeData.name}
            </h3>
            <p className="text-xs text-gray-600">
              {employeeData.role} · {employeeData.department}
            </p>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs  ">
          <thead>
            <tr>
              <th className="p-2 text-center border border-gray-200 text-black"></th>
              <th className="p-2 text-center border border-gray-200 text-black">
                P
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                A
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                WO
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                Σ Bonus/Fine
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                OT
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                LT
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                OT+LT
              </th>
              <th className="p-2 text-center border border-gray-200 text-black">
                Final Att.
              </th>
              <th className="p-2 text-left border border-gray-200 text-black">
                {""}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Calculated Row */}
            <tr>
              <td className="p-2 font-medium border border-gray-200 text-black">
                Cal.
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                17.5
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                2.5
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                11
              </td>
              <td className="p-2 text-center border border-gray-200 text-green-600">
                +2000
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                17:32 H
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                -12:00 H
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                05:32 H
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                20
              </td>
              <td className="p-2 text-left border border-gray-200 text-black text-sm">
                Finalized by Rahul
              </td>
            </tr>
            {/* Final Row */}
            <tr>
              <td className="p-2 font-medium border border-gray-200 text-black">
                Final
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                23.5
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                3.5
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                4
              </td>
              <td className="p-2 text-center border border-gray-200 text-green-600">
                +400
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                12:30 H
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                -19:00
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                -06:30 H
              </td>
              <td className="p-2 text-center border border-gray-200 text-black">
                27
              </td>
              <td className="p-2 text-left border border-gray-200 text-black text-sm">
                Locked by Shriniwas
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeRecord;
