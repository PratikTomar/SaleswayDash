import React from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { SALES_DATA } from "../utils/data";

const CustomersByDevice = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-xl font-bold mb-4">Customers by device</h3>

      <div className="h-[200px] mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={SALES_DATA}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="web_sales"
              name="Web sales"
              stroke="#3b82f6"
              strokeWidth={2.5}
              dot={false}
              animationDuration={1000}
            />
            <Line
              type="monotone"
              dataKey="offline_sales"
              name="Offline selling"
              stroke="#93c5fd"
              strokeWidth={2.5}
              dot={false}
              animationDuration={1000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center  space-x-8">
        <div className="flex items-center space-x-2">
          <span className="text-md text-gray-500 font-semibold">Web sales</span>
          <div className="w-3 h-3 bg-blue-600 rounded" />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-md text-gray-500 font-semibold">
            Offline selling
          </span>
          <div className="w-3 h-3 bg-blue-300 rounded" />
        </div>
      </div>
      <div className=" space-x-2">
        <span className="text-md font-bold mr-9">1,304%</span>
        <span className="text-md font-bold ml-8">473%</span>
      </div>
    </div>
  );
};

export default CustomersByDevice;
