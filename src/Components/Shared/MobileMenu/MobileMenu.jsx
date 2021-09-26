import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.scss';
import logo from '../../../Assets/Icons/logo.svg';
import StyledButton from '../StyledButton/StyledButton';

function MobileMenu(){
    const [ menu,toggleMenu] = useState(false);
    function toggleBar(){
        toggleMenu(!menu);
    }
    return(
        <>
        <div onClick={toggleBar}  className={menu===false ? `mobile-menu` : `mobile-menu clickmenu`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div  className="side-bar" className={menu===false ? `side-bar` : `side-bar side-bar-reveal `}>
         <div className="logo1">
         <img src={logo} />
         <p>pixeltrue</p>
         </div>
         <div className="links">
             <Link to="/case-studies">
                 Case Studies
             </Link>
             <Link to="/pricing">
                Pricing
             </Link>
             <Link to="/our-work">
                Our Work
             </Link>
             <Link to="/our-platform">
                Our Platform
             </Link>
             <Link to="/more">
                More
             </Link>
             <Link to="/login">
               Login
             </Link>
             <StyledButton link="Schedule Demo" />
         </div>
        </div>
        </>
    )
};
export default MobileMenu ;

