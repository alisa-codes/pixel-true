import React from 'react';
import { workList } from './data';
import './Styles/Works.scss';

function Works(){
    return(
        <div className="work-home">
            <h1>How it <span> works </span></h1>
            <ul>
             {workList.map((item) =>{
                 return(
                     <li>
                         <h1>{item.number}</h1>
                         <div className="point">
                         </div>
                         <div className="content">
                             <img src={item.image} />
                             <div>
                                 <h2>{item.title}</h2>
                                 <p>{item.desc}</p>
                            </div>
                         </div>
                    </li>
                 )
             })}
            </ul>
        </div>
    )
};
export default Works ;