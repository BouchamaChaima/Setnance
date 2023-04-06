import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeP from './pages/HomePage/HomeP';
import AboutP from './pages/AboutPage/AboutP';
import ServicesP from './pages/ServicesPage/ServicesP';
import ContactP from './pages/ContactPage/ContactP';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BasicModal from './components/login/BasicModal';
import SignIn from './components/login/Login';
import SignUp from './components/login/SignUp';

function App() {
  const [click, setClick] =useState(false)
  const [open, setOpen] = useState(false);
  const [SignInFirst, setSignInFirst] =useState(false);
  const [dark, setDark] =useState(true);
  return (
    <div>
      
      <BrowserRouter>
      	<Routes>
         <Route path='/' element={<Navbar dark={dark} setDark={setDark} open={open} setOpen={setOpen} click={click} setClick={setClick}/>}>
          <Route path='login' element={<BasicModal open={open} setClick={setClick}   setOpen={setOpen} >
            {
              SignInFirst  ? <SignUp setSignInFirst={setSignInFirst}/> :<SignIn  setSignInFirst={setSignInFirst}/>
            }
          </BasicModal>}/>
          <Route index element={<HomeP />} />
          <Route path="about" element={<AboutP/>} />
          <Route path="services" element={<ServicesP/>} />
          <Route path="contact" element={<ContactP/>} />

         </Route>
        </Routes>
      </BrowserRouter>
      <>{ click? <Footer />: <><HomeP/><Footer/></> }</>
    </div>
  );
}

export default App;
