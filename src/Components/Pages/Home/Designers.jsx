import React from 'react';
import { disAdv } from './data';
import './Styles/Designers.scss';

function Designers(){
    return(
        <div className="designers-home">
            <h1 data-aos="zoom-in"
              data-aos-delay={100}>We get it . Reliable designers</h1>
            <h1 data-aos="zoom-in"
              data-aos-delay={200} className="blueTitle">are hard to find</h1>
            <div className="cards" data-aos="flip-up"
                        data-aos-delay={300}>
                {disAdv.map((item) =>{
                    return(
                        <div  className="card">
                            <img src={item.img} />
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <div className="line"></div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
};
export default Designers ;