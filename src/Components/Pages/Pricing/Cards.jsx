import React from 'react';
import PriceCard from '../../Shared/PriceCard/PriceCard';
import { prices } from './data';
import './Styles/Cards.scss';

function Cards(){
    return(
        <div className="price-cards">
            <h1>Pricing</h1>
            <p>Transparent pricing, no hidden fees, no contract.</p>
            <div className="cards">
                {prices.map((d) =>{
                    return(
                        <PriceCard {...d}/>
                    )
                })}
            </div>
        </div>
    )
};
export default Cards ;