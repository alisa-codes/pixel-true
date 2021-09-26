import React, { useState,useEffect } from 'react';
import './Header.scss';
import logo from '../../../Assets/Icons/logo.svg';
import throttle from "lodash.throttle";
import { Link } from 'react-router-dom';
import StyledButton from '../StyledButton/StyledButton';
import MobileMenu from '../MobileMenu/MobileMenu';

function Header(props){
    let classes = [];
    const [scrolled,setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = throttle(() => {
          if (window.scrollY >= 100) setScrolled(true);
          else setScrolled(false);
        }, 100);
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      if (scrolled) classes.push("scrolled");
      
      else classes.push(props.styles);
    return(
      <>
      <div className="main-header" className={`main-header ${classes.join(" ")}`}>

        <div className={`header ${classes.join(" ")}`}>
            <Link to="/">
       <div className="logo">
       <img src={logo} />
       <p>pixeltrue</p>
       </div>
       </Link>
       <div className="main-links">
           <Link to="case-studies">
              Case Studies
           </Link>
           <Link to="case-studies">
               Pricing
           </Link>
           <Link to="case-studies">
               Our Work
           </Link>
           <Link to="case-studies">
               Our Platform
           </Link>
           <Link to="case-studies">
            More
           </Link>
           <Link to="case-studies">
             Login
           </Link>
           <StyledButton link="Schedule Demo"/>
       </div>
        </div>
       <MobileMenu />
      </div>
        </>
    )
};
export default Header ;