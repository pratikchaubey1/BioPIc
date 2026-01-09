import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Main from './Pages/LandingPage/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-amber-50 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
