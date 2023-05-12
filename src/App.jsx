// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/LoginPage"
import List from './pages/List';
import Home from './pages/Home';
import Singup from "./pages/SingUp";
import ScreenLogin from './pages/ScreenLogin';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="List" element={<List />} />
      <Route path="Login" element={<Login /> }/>
      <Route path="Singup" element={<Singup />}/>
      <Route path="ScreenLogin" element={<ScreenLogin />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
