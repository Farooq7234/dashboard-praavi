import AttendanceTable from "@/components/AttendanceTable";
import EmployeeRecord from "@/components/EmployeeRecord";
import SearchHeader from "@/components/SearchHeader";
import Sidebar from "@/components/Sidebar";
import TabNavigation from "@/components/TabNavigation";
import UserList from "@/components/UserList";

export default function Home() {
  const employeeData = {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    avatar: "/path/to/avatar.jpg",
  };
  return (
    <>
      <main className="bg-gray-100 gap-3 lg:gap-6 w-full overflow-x-hidden">
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <div className="w-full sm:mx-4">
              <TabNavigation />
              <SearchHeader />
            </div>
            <div className="flex gap-4 sm:mx-4 mt-4">
              <UserList />
              <div className="flex flex-col justify-start gap-4 w-full">
                <EmployeeRecord employeeData={employeeData} />
                <AttendanceTable />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
