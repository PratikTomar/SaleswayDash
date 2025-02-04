import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { LuAsterisk } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import useToggleState from "../../hooks/useToggleState";
import {
  BASE_API_URL,
  VALID_PASSWORD,
  VALID_USERNAME,
} from "../../utils/constants";
import { isValidEmail, isValidPassword } from "../../utils/utils";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    input_code: "",
  });

  const { isToggle, toggleHandler } = useToggleState();
  const { jsonData, fetchData } = useAxios(
    `${BASE_API_URL}/login`,
    "post",
    loginDetails
  );
  const navigate = useNavigate();

  console.log(jsonData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(loginDetails.email)) {
      toast.error("Invalid Email Format");
      return;
    }

    if (!isValidPassword(loginDetails.password)) {
      toast.error(
        "Password contains max 14 characters and min 8 characters with atleast 1 lowercase, 1 numeric"
      );
      return;
    }

    await fetchData();

    if (
      loginDetails.username === VALID_USERNAME &&
      loginDetails.password === VALID_PASSWORD
    ) {
      toast.success("Successfully Logged in");
      navigate("/dashboard");
    } else {
      toast.error("Username or Password error");
    }
  };

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-[#1976d2] mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="input-container">
            <div className="flex">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <LuAsterisk color="red" />
            </div>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              autoComplete="off"
              onChange={formChangeHandler}
              value={loginDetails.username}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-[#1976d2] transition-all"
              required
            />
          </div>

          <div className="input-container">
            <div className="flex">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <LuAsterisk color="red" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={formChangeHandler}
              value={loginDetails.email}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-[#1976d2] transition-all"
              required
            />
          </div>

          <div className="input-container">
            <div className="flex">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <LuAsterisk color="red" />
            </div>
            <div className="relative">
              <input
                type={isToggle ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="off"
                onChange={formChangeHandler}
                value={loginDetails.password}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-[#1976d2] transition-all"
                required
              />
              <button
                type="button"
                onClick={toggleHandler}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-[#1976d2]"
              >
                {isToggle ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="input-container">
            <div className="flex">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <LuAsterisk color="red" />
            </div>
            <input
              type="tel"
              id="phoneNumber"
              name="phone_number"
              placeholder="Enter your phone number"
              autoComplete="off"
              onChange={formChangeHandler}
              value={loginDetails.phone_number}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-[#1976d2] transition-all"
              required
            />
          </div>

          <div className="input-container">
            <div className="flex">
              <label
                htmlFor="inputCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Input Code
              </label>
              <LuAsterisk color="red" />
            </div>
            <input
              type="number"
              id="inputCode"
              name="input_code"
              placeholder="Enter the 2-digit code"
              autoComplete="off"
              onChange={formChangeHandler}
              value={loginDetails.input_code}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976d2] focus:border-[#1976d2] transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1976d2] text-white py-3 rounded-lg font-semibold hover:bg-[#115293] transition-all flex items-center justify-center cursor-pointer"
          >
            <IoIosLogIn className="mr-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
