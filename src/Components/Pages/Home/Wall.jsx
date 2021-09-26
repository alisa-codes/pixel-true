import React from 'react';
import './Styles/Wall.scss';
import Carousel from 'react-elastic-carousel';
import { feedbacks } from './data';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    
  ];
function Wall(){
    return(
        <div className="wall-home">
            <h1>Wall of <span>love</span></h1>
            <Carousel className="feedbacks">
                {feedbacks.map((item) =>{
                    return(
                        <div className="box">
                            <img src={item.image} />
                            <h3>{item.name}</h3>
                            <p>{item.job}</p>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
};
export default Wall;