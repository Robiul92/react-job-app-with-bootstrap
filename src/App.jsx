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
import AddJob from "./pages/AddJob";
import NotFound from "./pages/NotFound"
import EditJobPage from "./pages/EditJobPage"
import DeleteJobPage from "./pages/DeleteJobPage"

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobPages />} />
        <Route path="/jobs/:id" element={<JobPage />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/edit-job/:id" element={<EditJobPage />} />
        <Route path="/delete-job" element={<DeleteJobPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
