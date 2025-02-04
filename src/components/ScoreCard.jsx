import React, { useEffect } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import useAxios from "../hooks/useAxios";
import {
  BASE_API_URL,
  VALID_PASSWORD,
  VALID_USERNAME,
} from "../utils/constants";

const ScoreCard = () => {
  const { jsonData, fetchData } = useAxios(
    `${BASE_API_URL}/sample_assignment_api_3/`,
    "get",
    { auth: { username: VALID_USERNAME, password: VALID_PASSWORD } }
  );

  const COLORS = ["#3b82f6", "#f3f4f6"];

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = [
    { value: jsonData?.data?.score },
    { value: 100 - jsonData?.data?.score },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="relative w-32 h-36 mx-auto mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="85%"
              outerRadius="100%"
              startAngle={180}
              paddingAngle={5}
              endAngle={0}
              animationBegin={0}
              animationDuration={1000}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-3xl font-bold">{jsonData?.data?.score}</span>
            <span className="text-gray-500 text-sm block">of 100 points</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 ">
        <h3 className="font-bold mb-2 mt-4">{jsonData?.data?.title}!</h3>
        <p className="text-sm text-gray-400">{jsonData?.data?.message}</p>
        <button className="mt-5 border-2 rounded-xl border-gray-200 px-2 py-1 font-semibold cursor-pointer">
          Improve your score
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;
