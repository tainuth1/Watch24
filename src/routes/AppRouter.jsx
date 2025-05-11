import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
};

export default AppRouter;
