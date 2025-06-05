import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import YesPage from './components/YesPage';
import NoPage from './components/NoPage';

function App() {
  return (
    <Router basename="/Dr.Xi_grad">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
