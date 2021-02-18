import React,{useState} from "react";
import { FaTimes , FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib"
import { Nav ,
    NavbarContainer ,
    NavLogo ,
    NavIcon , 
    MobileIcon ,
    NavMenu ,
    NavItem ,
    NavLinks
} from "./Navbar.elements";

export const Navbar = () => {
  const [click, setClick] =useState(false)

  const handleClick = () => setClick(!click)
    return (
        <>
          <IconContext.Provider value={{color:"#fff"}}>
            <Nav>
                <NavbarContainer>   
                        <NavLogo to="/">
                            <NavIcon />
                                ULTRA
                            </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavLinks to="/">
                                <NavItem>
                                    Home
                                </NavItem>
                            </NavLinks>
                            <NavLinks to="/services">
                                <NavItem>                                
                                    Services                               
                                </NavItem>
                            </NavLinks>
                            <NavLinks to="/products">
                                <NavItem>                                
                                    Products
                                </NavItem>
                            </NavLinks>
                        </NavMenu>
                    
                </NavbarContainer>
            </Nav>
          </IconContext.Provider>  
        </>
    )
}


