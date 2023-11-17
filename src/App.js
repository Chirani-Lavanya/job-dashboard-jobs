import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {   Routes, Route } from "react-router-dom";

import SignUp from './Screens/SignUpPage';
import Register from'./Screens/RegisterPage';
import reportWebVitals from './reportWebVitals';
import SideBar from './Components/SideMenu';
import JobPosting from './Screens/JobPostingPage';
import ApplyJob from './Screens/ApplyJob';


const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobpage" element={<JobPosting />} />
      <Route path="/applyjob" element={<ApplyJob />} />
    </Routes>
  );
};

export default App;
