import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './Pages/Home'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBooking from './Pages/MyBooking'
import About from './Pages/About'
import Experience from './Pages/Experience'

import Footer from './components/Footer'

import Layout from './Pages/hotelOwner/Layout'
import Dashboard from './Pages/hotelOwner/Dashboard'
import AddRoom from './Pages/hotelOwner/AddRoom'
import ListRoom from './Pages/hotelOwner/ListRoom'

const App = () => {

  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <>
      {/* Hide Navbar for Owner Panel */}
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[80vh]">
        <Routes>

          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />

          {/* OWNER ROUTES */}
          <Route path="/owner" element={<Layout />}>

            <Route index element={<Dashboard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />

          </Route>

        </Routes>
      </div>

      {/* Hide Footer for Owner Panel */}
      {!isOwnerPath && <Footer />}
    </>
  )
}

export default App
