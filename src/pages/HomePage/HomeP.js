import React, { useState } from 'react';
import Intro from '../../components/LandingPage/intro/Intro';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import { Contact } from '../../components/LandingPage/intro/StyledIntro';
import BasicModal from '../../components/login/BasicModal';
import SignIn from '../../components/login/Login';
import SignUp from '../../components/login/SignUp';

export default function HomeP() {
    const [click, setClick] =useState(false)
    const [open, setOpen] = useState(false);
    const [SignInFirst, setSignInFirst] =useState(false);
    return <>
    
    <Intro />
    <About />
    <Services />
    <Contact />
    </>
    
}
