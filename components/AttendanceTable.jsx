import React from "react";
import {
  MoreVertical,
  Clock,
  MapPin,
  User,
  Edit3,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const AttendanceTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm bg-white rounded-md font-bold text-center">
        <thead>
          <tr className="border-b border-gray-200  ">
            <th className="p-3 text-center border-r border-gray-200 ">Date</th>
            <th className="p-3 text-center border-r border-gray-200 ">
              Time planned + WH
            </th>
            <th className="p-3 text-center border-r border-gray-200 ">
              Actual Time
            </th>
            <th className="p-3 text-center border-r border-gray-200 ">
              Fine/Bonus
            </th>
            <th className="p-3 text-center border-r border-gray-200 ">Error</th>
            <th className="p-3 text-center border-r border-gray-200 ">
              Cal. Att.
            </th>
            <th className="p-3 text-center border-r border-gray-200 ">
              Final Att.
            </th>
            <th className="p-3 text-center ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr className="border-b border-gray-200 text-center">
            <td className="p-3 border-r border-gray-200">M 31-Jun-2025</td>
            <td className="p-3 border-r border-gray-200">
              <div>09:00 AM - 06:30 PM</div>
              <div className="text-gray-500">≈ 09:00 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div>09:01 AM - 06:32 PM</div>
              <div className="text-gray-500">≈ 09:01 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <span className="text-green-500">+₹500</span>
              <span className="text-gray-400 ml-2 ">
                <strike>+₹900</strike>
              </span>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex gap-1">
                <Clock className="w-4 h-4 text-red-500" />
              </div>
            </td>
            <td className="p-3 border-r border-gray-200 text-green-500">P</td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex items-center">
                P
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-gray-400" />
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </td>
          </tr>

          {/* Row 2 - With Half Day */}
          <tr className="border-b border-gray-200 text-center">
            <td className="p-3 border-r border-gray-200">W 29-Jun-2025</td>
            <td className="p-3 border-r border-gray-200">
              <div>09:00 AM - 06:30 PM</div>
              <div className="text-gray-500">≈ 09:00 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div>
                09:01 AM - <span className="text-red-500">02:32 PM</span>
              </div>
              <div className="text-red-500">≈ 04:01 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <span className="text-green-500">+₹500</span>
              <span className="text-gray-400 ml-2 ">
                <strike>+₹900</strike>
              </span>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex gap-1">
                <MapPin className="w-4 h-4 text-red-500" />
                <Clock className="w-4 h-4 text-red-500" />
                <User className="w-4 h-4 text-red-500" />
              </div>
            </td>
            <td className="p-3 border-r border-gray-200 text-green-500">HD</td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex items-center">
                HD
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-gray-400" />
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </td>
          </tr>

          {/* Row 3 - With OT */}
          <tr className="border-b border-gray-200 text-center">
            <td className="p-3 border-r border-gray-200">T 28-Jun-2025</td>
            <td className="p-3 border-r border-gray-200">
              <div>09:00 AM - 06:30 PM</div>
              <div className="text-gray-500">≈ 09:00 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div>
                09:01 AM - <span className="text-orange-500">09:32 PM</span>
              </div>
              <div className="text-orange-500">≈ 12:01 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <span className="text-green-500">+₹500</span>
              <span className="text-gray-400 ml-2 ">
                <strike>+₹900</strike>
              </span>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex gap-1">
                <Clock className="w-4 h-4 text-orange-500" />
                <User className="w-4 h-4 text-orange-500" />
              </div>
            </td>
            <td className="p-3 border-r border-gray-200 text-green-500">
              P + OT
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex items-center justify-between">
                <span>P + OT</span>
                <span className="text-orange-500">09:01 H</span>
              </div>
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-gray-400" />
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </td>
          </tr>

          {/* Row 4 - With LT */}
          <tr className="border-b border-gray-200 text-center">
            <td className="p-3 border-r border-gray-200">F 27-Jun-2025</td>
            <td className="p-3 border-r border-gray-200">- @ -</td>
            <td className="p-3 border-r border-gray-200">
              <div>
                09:01 AM - <span className="text-red-500">05:32 PM</span>
              </div>
              <div className="text-red-500">≈ 08:01 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <span className="text-green-500">+₹500</span>
              <span className="text-gray-400 ml-2 ">
                <strike>+₹900</strike>
              </span>
            </td>
            <td className="p-3 border-r border-gray-200">
              <MapPin className="w-4 h-4 text-red-500" />
            </td>
            <td className="p-3 border-r border-gray-200 text-green-500">
              P - LT
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex items-center justify-between">
                <span>P - LT</span>
                <span className="text-red-500">09:01 H</span>
              </div>
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-gray-400" />
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </td>
          </tr>

          {/* Row 5 - With WO */}
          <tr className="border-b border-gray-200 text-center">
            <td className="p-3 border-r border-gray-200">S 26-Jun-2025</td>
            <td className="p-3 border-r border-gray-200">- @ -</td>
            <td className="p-3 border-r border-gray-200">
              <div>09:01 AM - 06:32 PM</div>
              <div className="text-gray-500">≈ 09:01 H</div>
            </td>
            <td className="p-3 border-r border-gray-200">
              <span className="text-green-500">+₹500</span>
              <span className="text-gray-400 ml-2 ">
                <strike>+₹900</strike>
              </span>
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex gap-1">
                <MapPin className="w-4 h-4 text-red-500" />
                <User className="w-4 h-4 text-red-500" />
              </div>
            </td>
            <td className="p-3 border-r border-gray-200 text-green-500">
              P + WO
            </td>
            <td className="p-3 border-r border-gray-200">
              <div className="flex items-center">
                P + WO
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-gray-400" />
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
