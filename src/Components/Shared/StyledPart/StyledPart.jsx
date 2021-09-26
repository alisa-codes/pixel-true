import React from 'react';
import './StyledPart.scss';

function StyledPart(props){
    return(
        <div className={`styled-part ${props.styles}`}>
            <div className="content">
                {props.icon}
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <img src={props.image} />
        </div>
    )
};
export default StyledPart;