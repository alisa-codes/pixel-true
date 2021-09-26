import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../StyledButton/StyledButton';
import './Try.scss';

function Try(){
    return(
        <div className="try">
           <div className="main-try">
               <h1>Try us out!</h1>
               <p>All our plans are backed by a</p>
               <Link to="/">14 day money-back guarantee.</Link>
               <StyledButton link="SEE PRICING"/>
           </div>
        </div>
    )
};
export default Try ;