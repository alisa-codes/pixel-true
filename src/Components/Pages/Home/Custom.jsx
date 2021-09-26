import React from 'react';
import Demo from '../../Shared/Demo/Demo';
import { demos } from './data';
import './Styles/Custom.scss';

function Custom(){
    return(
        <div className="custom-home">
            <h1><span>Custom</span> Designs</h1>
            <p>Crafted with skill and care to help our clients grow their business!</p>
            <div className="demos">
                {demos.map((d) =>{
                    return(
                        <Demo {...d} />
                    )
                })}
            </div>
        </div>
    )
};
export default Custom ;