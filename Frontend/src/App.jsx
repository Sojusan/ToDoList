import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
