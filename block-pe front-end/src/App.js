import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp'
import Resell from './components/Resell/Resell';
import Records from './components/Records/Records'
import Purchase from './components/Purchase/Purchase'
import Bill from './components/Billing/Bill'
import Verify from './components/Verify/Verify';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Login from './components/Login/Login'
const App=()=>{
  return(
    <>
    <div className='box'>
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
    <Route exact path="/register" element={<SignUp/>}/>

    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/verify" element={<Verify/>}/>
    <Route exact path="/billing" element={<Bill/>}/>
    <Route exact path="/records" element={<Records/>}/>
    <Route exact path="/purchase" element={<Purchase/>}/>
    <Route exact path="/resell" element={<Resell/>}/>
   
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App