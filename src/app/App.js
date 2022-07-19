import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/session/NotFound";
import Car from "../pages/Car";
import Driver from "../pages/Driver";
import DriverDetails from "../pages/DriverDetails";
import Payment from "../pages/Payment";
import User from "../pages/User";
import BookingDetails from "../pages/BookingDetails";
import Admin from "../pages/Admin";

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/car" element={<Car/>}/>
    <Route exact path="/driver" element={<Driver/>}/>
    <Route exact path="/driverDetail" element={<DriverDetails/>}/>
    <Route exact path="/payment" element={<Payment/>}/>
    <Route exact path="/user" element={<User/>}/>
    <Route exact path="/bookingDetails" element={<BookingDetails/>}/>
    <Route exact path="/admin" element={<Admin/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  );
}

export default App;
