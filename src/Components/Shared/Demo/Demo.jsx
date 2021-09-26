import React from 'react';
import './Demo.scss';

function Demo(props){
    return(
        <div className="demo" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <div>
        <p>{props.sub}</p>
        </div>
        <div className="bottom">
            <h4>{props.desc}</h4>
        </div>
        </div>
    )
};
export default Demo ;