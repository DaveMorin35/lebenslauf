import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Layout from './pages/Layout';

const App = () => (
  <Router basename='/'>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<Welcome />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
