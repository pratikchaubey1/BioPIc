import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Herosection from './Component/HandingPage/Herosection';
import Aboutme from './Component/HandingPage/Aboutme';


function App() {
 
  return (
   
    <div className="bg-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Herosection/>}
          />
          
         
          

        </Routes>
      </BrowserRouter>
      <Aboutme/>
    </div>
  );
}

export default App;
