/* eslint-disable react/jsx-filename-extension */

import './styles/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Navbar from './components/navbar/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="*" element={<Navigate to="/posts" replace />} />
    </Routes>
  </Router>
);

export default App;
