import React from "react";
import { MdTrendingDown, MdTrendingUp } from "react-icons/md";
import { Tooltip } from "../components/Tooltip";

const StatCard = ({ value, change, isPositive, title }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      <Tooltip content={`Compare to previous period: ${change}`}>
        <div className="space-y-2">
          <p className="text-sm text-gray-400 font-semibold">{title}</p>
          <div className="flex items-center justify-normal">
            <h3 className="text-2xl font-semibold">{value}</h3>
            <div
              className={`rounded-xl flex justify-center items-center font-bold ml-2 py-0.5 px-2.5 border border-transparent text-xs transition-all shadow-sm ${
                isPositive
                  ? "text-green-700 bg-emerald-100"
                  : "text-red-600 bg-red-300"
              }`}
            >
              <span>{change}</span>
              <span>
                {" "}
                {isPositive ? (
                  <MdTrendingUp className="ml-2" />
                ) : (
                  <MdTrendingDown className="ml-2" />
                )}
              </span>
            </div>
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default StatCard;
