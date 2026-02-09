import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer'
import AllRooms from './Pages/AllRooms'

const App = () => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/owner");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <div className="min-h-[70vh] pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
        </Routes>
      </div>

      {!hideNavbar && <Footer />}
    </>
  );
};

export default App;
