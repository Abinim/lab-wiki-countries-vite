import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries/:alpha3Code' element={<CountryDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
