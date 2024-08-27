import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from 'views/Login';
import Layout from 'containers/Layout';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Layout />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
