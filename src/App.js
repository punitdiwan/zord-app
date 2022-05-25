import React from 'react';
import About_us from './About_us/About_us';
import Footer from './Component/footer/footer';
import Homepage from './Homepage/Homepage';
import Contact from './Contact/Contact'

import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Mobileapp from './mobileapp/Mobileapp';
import Reactapp from './Reactapp/Reactapp';
import Nodeapp from './Nodeapp/Nodeapp';
import Angularapp from './Angularapp/Angularapp';


const App = () => {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About_us/>}/>
        <Route path="/mobileapp" element={<Mobileapp/>} />
        <Route path='/reactapp' element={<Reactapp/>}/>
        <Route path='/nodeapp' element={<Nodeapp />} />
        <Route path='/angular' element={<Angularapp />} />

      </Routes>

      <Footer />
    </>
  )

}

export default App;
