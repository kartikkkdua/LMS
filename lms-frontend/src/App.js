// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import CourseList from './components/Courses/CourseList';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import NavBar from './components/Navbar';
import PasswordResetRequest from './components/Auth/PasswordResetRequest';
import PasswordResetForm from './components/Auth/PasswordResetForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './app.css'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/courses" element={isAuthenticated ? <CourseList /> : <Navigate to="/login" />} />
        <Route path="/courses/:courseId" element={isAuthenticated ? <CourseDetails /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isAuthenticated ? <EditProfile /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
