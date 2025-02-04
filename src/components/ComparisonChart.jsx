import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SALES_DATA_YEARWISE } from "../utils/data";

const ComparisonChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Comparison</h3>
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>6 months</option>
          <option>12 months</option>
        </select>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SALES_DATA_YEARWISE}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value}k`}
            />
            <Tooltip cursor={{ fill: "rgba(59, 130, 246, 0.1)" }} />
            <Legend
              wrapperStyle={{ paddingTop: "20px" }}
              iconType="circle"
              iconSize={6}
            />

            <Bar
              dataKey="last_year"
              name="Last year"
              fill="#A1E3F9"
              radius={[4, 4, 0, 0]}
              barSize={28}
              animationDuration={750}
              animationBegin={100}
            />
            <Bar
              dataKey="this_year"
              name="This year"
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              barSize={28}
              animationDuration={750}
              animationBegin={0}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonChart;
