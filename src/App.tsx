/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Auth mode="login" />} />
            <Route path="/signup" element={<Auth mode="signup" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
