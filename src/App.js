import "./App.css";
import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Screens/SignUpPage";
import Register from "./Screens/RegisterPage";
import JobPosting from "./Screens/JobPostingPage";
import ApplyJob from "./Screens/ApplyJob";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Register />} />
      <Route path="/jobpage" element={<JobPosting />} />
      <Route path="/applyjob" element={<ApplyJob />} />
    </Routes>
  );
};

export default App;
