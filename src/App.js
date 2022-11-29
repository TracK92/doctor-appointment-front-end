import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrDetail from './components/DoctorDetail/DrDetail';
import './components/DoctorDetail/DrDetail.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorsList from './components/Doctors/DoctorsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/doctors/:index" element={<DrDetail />} />
        <Route exact path="/" element={<DoctorsList />} />
      </Routes>
    </Router>
  );
}

export default App;
