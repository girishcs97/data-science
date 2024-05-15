import React from 'react';
import Header from './components/Header/header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Opportunities from './components/Opportunities/opportunities';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Research from './components/Research/research';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}
export default App;