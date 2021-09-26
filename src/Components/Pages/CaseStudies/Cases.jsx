import React from 'react';
import './Cases.scss';
import {cases} from './data';
import Case from '../../Shared/Case/Case';
function Cases(){
    return(
        <div className="cases">
            <h1>Case Studies</h1>
            <div className="cards">
              {cases.map((d) =>{
                  return(
                      <Case {...d}/>
                  )
              })}
            </div>
        </div>
    )
};
export default Cases ;