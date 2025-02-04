import React from "react";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212] text-white text-center p-6">
      <MdErrorOutline className="text-[#f44336] text-8xl mb-8" />

      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-[#1976d2] hover:bg-[#1565c0] text-white font-semibold px-8 py-2 rounded-md transition-colors duration-300"
      >
        Go to Login Page
      </button>
    </div>
  );
};

export default NotFoundPage;
