import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Credits from './pages/Credits';
import Sets from './pages/Sets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/sets" element={<Sets />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
