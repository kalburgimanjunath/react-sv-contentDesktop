import React from 'react';
import './style.css';

import { Routes, Route } from 'react-router-dom';
import { Login, Signup, Dashboard, Home } from './pages/index';
import { getStorage } from './firebase';
export default function App() {
  // getStorage();
  return (
    <div>
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="dasbhoard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/*" element={<Signup />} exact></Route>
      </Routes>
    </div>
  );
}
