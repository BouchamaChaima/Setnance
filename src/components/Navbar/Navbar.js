import React from 'react';
import { TbMenu } from 'react-icons/tb';
import  {MdLightMode,MdNightlight} from "react-icons/md";
import  {IoMdClose} from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import { 
  Nav, NavContainer, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './style';
import { Button, Tooltip } from '@mui/material';

import { Outlet } from 'react-router-dom';

const NavItemLinks=[
  {
    id:1,
    href:"/",
    name:"home"
  },
  {
    id:2,
    href:"/",
    name:"home"
  },
  {
    id:3,
    href:"/",
    name:"home"
  },
  {
    id:4,
    href:"/",
    name:"home"
  }
]


function Navbar({click,setClick,setOpen}) {
  const handelClick=()=>setClick(!click);
  return (
    <>
      <Nav style={{background: 'white'}} >
        <NavContainer>
          <NavLogo to='/'>
          TEC
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ?  <IoMdClose/>:<TbMenu />}</MobileIcon>
           <NavMenu>
     
                <NavItem>
                <Navlinks to='/'>Home</Navlinks>
              </NavItem>
              <NavItem>
                <Navlinks to='/about'>about</Navlinks>
              </NavItem>
              <NavItem>
                <Navlinks to='/services'>Services</Navlinks>
              </NavItem>
              <NavItem>
                <Navlinks to='/contact'>cantact us</Navlinks>
              </NavItem>
            <Tooltip title={"login pages"}>
            <Button onClick={()=>{setOpen(true);setClick(false)}} sx={{borderRadius:"18px",margin:"13px"}} variant='contained'><Navlinks to='login' style={{textDecoration: 'none', color: 'white'}}>Login</Navlinks></Button>
            </Tooltip>
          
           </NavMenu>
        </NavContainer>
      </Nav>
    <Outlet />
    </>
  )
}

export default Navbar
