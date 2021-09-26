import React from 'react';
import { Link } from 'react-router-dom';
import './StyledButton.scss';

function StyledButton(props){
    return(
        <div className="styled-button">
        <Link to={props.to}>
            <button>{props.link}</button>
        </Link>
        </div>
            
    )
};
export default StyledButton;