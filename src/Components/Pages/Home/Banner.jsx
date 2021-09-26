import React from 'react';
import StyledButton from '../../Shared/StyledButton/StyledButton';
import './Styles/Banner.scss';

function Banner(){
    return(
        <div className="banner-home">
            <h1 data-aos="zoom-in"
              data-aos-delay={100}>Get A Superhero Design Team To Grow Your Business</h1>
            <p data-aos="zoom-in"
              data-aos-delay={200}>We provide an experienced design team that works with you everyday to create high-quality design assets to help grow your business. Zero headaches, fixed pricing and no contracts.</p>
              <div data-aos="flip-down"
              data-aos-delay={300}>

            <StyledButton 
            link="SEE OUR PRICING"
            />
              </div>
        </div>
    )
};
export default Banner ;