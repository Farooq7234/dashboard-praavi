const users = [
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/200x200",
  },
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/300x300",
  },
  {
    name: "Bhaskar Sharma",
    role: "Sales Manager",
    department: "Sales Dept.",
    image: "https://placehold.co/200x200",
  },
];

const UserList = () => {
  return (
    <div className="hidden sm:flex w-[300px] h-[550px] overflow-y-scroll bg-white p-2 rounded-lg shadow-md scroll-auto">
      {/* User List Container */}
      <div className="space-y-3">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center bg-[#F7F7FE]  rounded-lg shadow-sm hover:bg-[#E2E2FF] transition p-4 w-[100%]"
          >
            {/* User Image */}
            <img
              src="man.jpg"
              alt={user.name}
              className="w-10 h-10 rounded-full border"
            />

            {/* User Info */}
            <div className="ml-3">
              <p className="text-xs font-semibold text-gray-900">{user.name}</p>
              <p className="text-[10px] text-gray-500">
                {user.role} | {user.department}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
