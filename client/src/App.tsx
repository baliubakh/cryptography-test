import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NoMatch from "./pages/NoMatch";
import LayoutWrapper from "./components/LayoutWrapper";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/" element={<LayoutWrapper />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
