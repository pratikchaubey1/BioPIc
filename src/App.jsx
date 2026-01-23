import React from 'react';
import { UserProvider } from './Context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Main from './Pages/LandingPage/Main';
import Photography from './Component/Pages/Photography';
import { Film } from 'lucide-react';
import Editorial from './Component/Pages/Editorial';
import One from './Component/Pages/One';
import ContectUs from './Component/Pages/ContectUs';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="bg-[#f3eee6] min-h-screen overflow-hidden">
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/Photography' element={<Photography/>}/>
            <Route path='/Films' element={<One/>}/>
            <Route path='/Editorial' element={<Editorial/>}/>
            <Route path='/Contact' element={<ContectUs/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
