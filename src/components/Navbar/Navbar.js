import React,{ useState , useEffect} from "react";
import { FaTimes , FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib"
import { Button } from "../../globalStyles";
import { Nav ,
    NavbarContainer ,
    NavLogo ,
    NavIcon , 
    MobileIcon ,
    NavMenu ,
    NavItem ,
    NavLinks ,
    NavItemBtn,
    NavBtnLink
} from "./Navbar.elements";

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton]= useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      }else{
          setButton(true)
      }
  }
useEffect(()=>{
    showButton()
},[])

window.addEventListener("resize",showButton)
  
    return (
        <>
          <IconContext.Provider value={{color:"#fff"}}>
            <Nav>
                <NavbarContainer>   
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                                DesignX
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
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="sign-up">
                                        <Button primary >Sign up</Button>
                                    </NavBtnLink>
                                    ) : (
                                        <NavBtnLink to="/sign-up">
                                            <Button  fontBig big primary>
                                                SIGN UP
                                            </Button>
                                        </NavBtnLink>    
                                    )
                                }
                            </NavItemBtn>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
          </IconContext.Provider>  

        </>
    )
}



