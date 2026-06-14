import React from 'react'
import {  Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
// import UserProvider from './context/userContext';

const App = () => {
  return (
 
    <div>
   
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep />} />

        </Routes>
     

      <Toaster
        toastOptions={{
          className:"",
          style: {
            fontSize: "13px",
          },
        }} 
      />
    </div>
    
  );
};

export default App
