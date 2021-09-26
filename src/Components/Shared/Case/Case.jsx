import React from 'react';
import './Case.scss';

function Case(props){
    return(
        <div className="case-study" data-aos="zoom-in"
        data-aos-delay={props.delay}>
            <div className="image-part" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                <div className="line" style={{backgroundColor:`${props.color}`}}>

                </div>
            </div>
           <div className="content">
           <h2>{props.title}</h2>
           </div>
        </div>
    )
};
export default Case ;