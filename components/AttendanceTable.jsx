"use client";
import React, { useState, useEffect } from "react";
import {
  MoreVertical,
  Clock,
  MapPin,
  User,
  MessageCircle,
  ChevronDown,
  Link2,
} from "lucide-react";

const AttendanceTable = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/attendance.json")
      .then((response) => response.json())
      .then((data) => {
        setAttendanceData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading attendance data...</p>;
  if (!attendanceData || !attendanceData.attendanceRecords)
    return <p>No attendance records available.</p>;

  return (
    <div className="w-full px-4">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <table className="w-full table-fixed border-collapse text-[10px] bg-white font-bold border border-gray-300 text-center">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-3 text-center border-r border-gray-200">
                  Date
                </th>
                <th className="p-3 text-center border-r border-gray-200">
                  Time planned + WH
                </th>
                <th className="p-3 text-center border-r border-gray-200">
                  Actual Time
                </th>
                <th className="p-3 text-center border-r border-gray-200">
                  Fine/Bonus
                </th>
                <th className="p-3 text-center border-r border-gray-200">
                  Error
                </th>
                <th className="p-3 text-center border-r border-gray-200">
                  Cal. Att.
                </th>
                <th className="p-3 text-center border-r border-gray-200">
                  Final Att.
                </th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.attendanceRecords.map((record, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 text-center"
                >
                  <td className="p-3 border-r border-gray-200 break-words">
                    {record.dayOfWeek} {record.date}
                  </td>
                  <td className="p-3 border-r border-gray-200 break-words">
                    <div>
                      {record.plannedTime?.start} - {record.plannedTime?.end}
                    </div>
                    <div className="text-gray-500">
                      ≈ {record.plannedTime?.duration}
                    </div>
                  </td>
                  <td className="p-3 border-r border-gray-200 break-words">
                    <div>
                      {record.actualTime?.start} -{" "}
                      <span
                        className={`${
                          record.actualTime?.duration < "09:00 H"
                            ? "text-red-500"
                            : "text-orange-500"
                        }`}
                      >
                        {record.actualTime?.end}
                      </span>
                    </div>
                    <div
                      className={`${
                        record.actualTime?.duration < "09:00 H"
                          ? "text-red-500"
                          : "text-orange-500"
                      }`}
                    >
                      ≈ {record.actualTime?.duration}
                    </div>
                  </td>
                  <td className="p-3 border-r border-gray-200 break-words">
                    <span className="text-green-500">{record.fine || "-"}</span>
                    <span className="text-gray-400 ml-2">
                      <strike>{record.bonus || "-"}</strike>
                    </span>
                  </td>
                  <td className="p-3 border-r border-gray-200 break-words">
                    <div className="flex gap-1 justify-center">
                      {record.errors?.includes("time") && (
                        <Clock className="w-4 h-4 text-red-500" />
                      )}
                      {record.errors?.includes("location") && (
                        <MapPin className="w-4 h-4 text-red-500" />
                      )}
                      {record.errors?.includes("user") && (
                        <User className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </td>
                  <td className="p-3 border-r border-gray-200 text-green-500 break-words">
                    {record.calculatedAttendance || "-"}
                  </td>
                  <td className="p-3 border-r border-gray-200 break-words">
                    <div className="flex items-center justify-center">
                      {record.finalAttendance || "-"}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </div>
                  </td>
                  <td className="p-3 break-words">
                    <div className="flex items-center gap-2 justify-center">
                      <Link2 className="w-4 h-4 text-gray-800 cursor-pointer" />{" "}
                      3
                      <MessageCircle className="w-4 h-4 text-gray-800 cursor-pointer" />{" "}
                      3
                      <MoreVertical className="w-4 h-4 text-gray-800 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
