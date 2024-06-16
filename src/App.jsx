import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadMockData } from "./store/actions";
import DashboardLayout from "./layouts/DashboardLayout";
import Courses from "./pages/Courses";
import Overview from "./pages/Overview";
import LoginPage from "./components/LoginPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMockData());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="courses" element={<Courses />} />
        <Route path="overview" element={<Overview />} />
      </Route>
    </Routes>
  );
};

export default App;
