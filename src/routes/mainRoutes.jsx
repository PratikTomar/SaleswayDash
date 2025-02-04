import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/shared/Loader.jsx";
const Login = lazy(() => import("../pages/auth/Login.jsx"));
const DashBoard = lazy(() => import("../pages/Dashboard.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.jsx"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Dashboard" element={<DashBoard />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
