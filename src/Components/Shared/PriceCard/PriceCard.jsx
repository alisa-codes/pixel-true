import React from 'react';
import StyledButton from '../StyledButton/StyledButton';
import './PriceCard.scss';

function PriceCard(props){
    return(
        <div className="price-card" data-aos="fade-up"
        data-aos-delay={props.delay}>
            <img src={props.image} />
           <div className="content">
           <h2>{props.title}</h2>
           <div className="price">
               <p>${props.old}</p>
               <h1>${props.new}<span> / mo</span></h1>
           </div>
           <p className="save">Save 15% for life</p>
           <div className="items">
               <p>{props.item1}</p>
               <p>{props.item2}</p>
               <p>{props.item3}</p>
               <p>{props.item4}</p>
               <p>{props.item5}</p>

           </div>
           <StyledButton link={props.link} />
           </div>
        </div>
    )
};
export default PriceCard ;