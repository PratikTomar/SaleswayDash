import { Box, Flag, Settings, Share2, Users } from "lucide-react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { RiFlowChart } from "react-icons/ri";

const menuItems = [
  { icon: MdDashboard, text: "Dashboard", active: true },
  { icon: Flag, text: "Campaigns" },
  { icon: RiFlowChart, text: "Flows" },
  { icon: Box, text: "Integrations" },
  { icon: Users, text: "Customers" },
];

const  Sidebar = () => {
  return (
    <div className="w-64 bg-grey h-screen p-6 flex flex-col border-r border-gray-200">
      <div className="flex items-center space-x-2 mb-8">
        <Share2 className="h-6 w-6 text-black-600" />
        <span className="text-xl font-semibold">Salesway</span>
      </div>
      <div className="pt-4 mt-4">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-500 font-medium hover:bg-gray-50 transition-all duration-200">
          <Settings className="h-5 w-5 text-gray-400" />
          <span>Settings</span>
        </button>
      </div>

      <div className="">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-500 font-medium hover:bg-gray-50 transition-all duration-200">
          <CgProfile className="h-5 w-5 text-gray-400" />
          <span>Team</span>
        </button>
      </div>

      <div className="px-4 py-3 flex items-center space-x-3">
        <span>Menu</span>
      </div>

      <nav className="flex-1">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.text}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active
                  ? "bg-white font-bold"
                  : "text-gray-500 font-medium hover:bg-white"
              }`}
            >
              <item.icon
                className={`h-5 w-5 ${
                  item.active
                    ? "bg-white text-blue-600"
                    : "text-gray-400  hover:bg-white"
                } `}
              />
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="flex items-center mt-4 px-4 py-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-medium">Tom Wang</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;