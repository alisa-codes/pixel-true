import React from 'react';
import StyledButton from '../../Shared/StyledButton/StyledButton';
import './Styles/Banner.scss';

function Banner(){
    return(
        <div className="platform-banner">
            
                <h1 data-aos="zoom-in"
              data-aos-delay={100}>Our Platform</h1>
                <p  data-aos="zoom-in"
              data-aos-delay={200}>Getting breath-taking designs has never been easier!  Submit your design requests and receive it back within 24-48 hours.</p>
              <div data-aos="flip-down"
              data-aos-delay={300}>

                <StyledButton link="LEARN MORE"/>
              </div>
        </div>
    )
};
export default Banner ;