import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  } from "react-router-dom";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import MainLayout from "./Layout/MainLayout";

import HomePage from "./pages/HomePage";
import JobPages from "./pages/JobPages";
import JobPage from "./pages/JobPage";

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobPages />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="*" element={<JobPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
