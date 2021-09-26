import React from 'react';
import './WorkCard.scss';

function WorkCard(props){
    return(
        <div className="work-card">
         <div className="image-part" style={{ backgroundImage: `url(${props.backgroundImage})` }}></div>
         <h2>{props.title}
         <div className="line" style={{backgroundColor:`${props.color}`}}></div>
         </h2>
         
        </div>
    )
};
export default WorkCard ;