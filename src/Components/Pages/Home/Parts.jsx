import React from 'react';
import StyledPart from '../../Shared/StyledPart/StyledPart';
import { parts } from './data';

function Parts(){
    return(
        <>
        {parts.map((d) =>{
            return(
                <StyledPart 
                {...d}
                />
            )
        })}
        </>
    )
};
export default Parts ;