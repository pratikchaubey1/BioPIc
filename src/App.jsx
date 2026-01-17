import React from 'react';
import { UserProvider } from './Context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Main from './Pages/LandingPage/Main';
import Photography from './Component/Pages/Photography';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-[#f3eee6] min-h-screen overflow-hidden">
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/Photography' element={<Photography/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
