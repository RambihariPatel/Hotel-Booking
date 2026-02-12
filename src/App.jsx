import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBooking from './Pages/MyBooking'
import HotelReg from './components/HotelReg'

const App = () => {

  const location = useLocation();
  const isOwnerPath = location.pathname.includes("/owner");

  return (
    <>
      {!isOwnerPath && <Navbar />}

      {false && <HotelReg />}

      <div className="min-h-[70vh]">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App;
