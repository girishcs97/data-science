import React from 'react';
import Header from './components/Header/header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Opportunities from './components/Opportunities/opportunities';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import Research from './components/Research/research';
import Faculty from './components/Faculty/faculty';
import Career from './components/Career/career'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/research" element={<Research />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </>
  )
}
export default App;