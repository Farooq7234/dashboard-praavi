import { Calendar, CirclePower, Users, WalletMinimal } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-16 bg-[#323FDD] flex flex-col items-center p-2 space-y-8">
      {/* Logo / Initial Letter */}
      <div className="text-white text-xl ">P</div>

      {/* Profile Picture */}
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <img
          src="admin.jpg" // Replace with actual profile image URL
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-6 text-white">
        <Calendar size={20} className="cursor-pointer hover:text-gray-200" />
        <Users size={20} className="cursor-pointer hover:text-gray-200" />
        <WalletMinimal
          size={20}
          className="cursor-pointer hover:text-gray-200"
        />
      </div>

      {/* Spacer to push power button to the bottom */}
      <div className="flex-grow"></div>

      {/* Power Button */}
      <CirclePower
        size={20}
        className="text-white cursor-pointer hover:text-red-500"
      />
    </div>
  );
};

export default Sidebar;
