import React from 'react';
import './index.css';  // Make sure to include your Tailwind CSS file
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';
import PageNotFound from './components/PageNotFound';

function App() {
  const authLogin = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Router>
        <Routes>
          {/* Redirect based on authentication */}
          <Route path="/" element={authLogin ? <Navigate to="/profile" /> : <Navigate to="/login" />} />
          
          <Route path='/register' element={<Register/>} />
          {/* Protected Profile Route */}
          {authLogin ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          
          {/* Not Found Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
