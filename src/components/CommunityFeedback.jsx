import React, { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import {
  BASE_API_URL,
  VALID_PASSWORD,
  VALID_USERNAME,
} from "../utils/constants";

const CommunityFeedback = () => {
  const { jsonData, fetchData } = useAxios(
    `${BASE_API_URL}/sample_assignment_api_5/`,
    "get",
    { auth: { username: VALID_USERNAME, password: VALID_PASSWORD } }
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="text-md font-semibold mb-2 text-gray-400">
        Community feedback
      </h3>
      <h4 className="text-xl font-bold mb-4">Mostly positive</h4>

      <div className="h-3 mb-6">
        <div className="flex justify-between gap-1">
          <div className="rounded-md bg-[#dd749a] py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm w-14"></div>
          <div className="rounded-md bg-[#F9CB43] py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm  w-16"></div>
          <div className="rounded-md bg-[#97ff8e] py-1 px-3 border border-transparent text-sm text-white transition-all shadow-sm w-full"></div>
        </div>
      </div>

      <div className="flex justify-normal">
        <div className="mr-5">
          <p className="text-gray-500 font-semibold">Negative</p>
          <p className="font-bold">{jsonData?.data?.negative}</p>
        </div>
        <div className="mr-5">
          <p className="text-gray-500 font-semibold">Neutral</p>
          <p className="font-bold">{jsonData?.data?.neutral}</p>
        </div>
        <div className="mr-5">
          <p className="text-gray-500 font-semibold">Postive</p>
          <p className="font-bold">{jsonData?.data?.positive}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;
