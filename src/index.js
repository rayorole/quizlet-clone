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
import CreateSet from './pages/CreateSet';
import BrowseSets from './pages/BrowseSets';
import Terms from './pages/Terms';

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
        <Route path="/sets/create" element={<CreateSet />} />
        <Route path="/sets/browse" element={<BrowseSets />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
