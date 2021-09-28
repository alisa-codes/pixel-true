import React from 'react';
import { parts } from './data';
import StyledPart from '../../Shared/StyledPart/StyledPart';
function Parts(){
    return(
        <>
        {parts.map((d) =>{
            return(
                <StyledPart {...d}/>
            )
        })}
        </>
    )
};
export default Parts ;