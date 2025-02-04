import React, { useEffect } from "react";
import CommunityFeedback from "../components/communityFeedback";
import ComparisonChart from "../components/ComparisonChart";
import CustomersByDevice from "../components/CustomersByDevice";
import ProductTable from "../components/ProductTable";
import ScoreCard from "../components/ScoreCard";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import useAxios from "../hooks/useAxios";
import {
  BASE_API_URL,
  VALID_PASSWORD,
  VALID_USERNAME,
} from "../utils/constants";

const DashBoard = () => {
  const { jsonData, fetchData } = useAxios(
    `${BASE_API_URL}/sample_assignment_api_1/`,
    "get",
    { auth: { username: VALID_USERNAME, password: VALID_PASSWORD } }
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 border-8 rounded-2xl border-gray-200 shadow-xl">
      <Sidebar />

      <main className="flex-1 p-8 rounded-2xl border border-gray-200 bg-white shadow-xl mr-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-2 font-semibold">
              <span className="text-lg text-gray-600">Compare to</span>
              <select className="border-2 rounded-xl border-gray-200 p-1.5">
                <option>Last year</option>
                <option>Last quarter</option>
                <option>Last month</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <StatCard
              value={jsonData?.data?.purchases}
              change="+32%"
              isPositive={true}
              title={"Purchases"}
            />
            <StatCard
              value={jsonData?.data?.revenue}
              change="+49%"
              isPositive={true}
              title={"Revenue"}
            />
            <StatCard
              value={jsonData?.data?.refunds}
              change="+7%"
              isPositive={false}
              title={"Refunds"}
            />
          </div>

          <div className="">
            <div className="space-y-6">
              <ComparisonChart />
              <ProductTable />
            </div>
          </div>
        </div>
      </main>

      <div className="space-y-1">
        <ScoreCard />
        <CustomersByDevice />
        <CommunityFeedback />
      </div>
    </div>
  );
};

export default DashBoard;
