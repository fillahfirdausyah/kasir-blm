import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/Homepage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
