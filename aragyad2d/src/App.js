// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/Hero';
import Home from './components/pages/Home';
import RequestConsultation from './components/pages/RequestConsultation';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                {/* <div className="max-w-7xl mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold text-center text-gray-800">
                    Welcome to MedDeliver
                  </h1>
                  <p className="text-center text-gray-600 mt-4">
                    Your health, our priority - Medicines delivered at your doorstep
                  </p>
                </div> */}
              </>
            } />
            <Route path="/consultation" element={<RequestConsultation />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;