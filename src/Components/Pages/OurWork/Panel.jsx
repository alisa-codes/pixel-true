import React from 'react';
import WorkCard from '../../Shared/WorkCard/WorkCard';
import './Styles/Works.scss';
function Panel(props){
    return(
        <div className="mainpanel">
            {props.list.map((d) =>{
                return(
                    <WorkCard {...d} />
                )
            })}
        </div>
    )
};
export default Panel ;