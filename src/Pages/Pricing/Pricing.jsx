import React from 'react';
import Cards from '../../Components/Pages/Pricing/Cards';
import Pay from '../../Components/Pages/Pricing/Pay';
import Header from '../../Components/Shared/Header/Header';
import Wall from '../../Components/Pages/Home/Wall';
import Try from '../../Components/Shared/Try/Try';
function Pricing(){
    return(
        <>
        <Header />
        <Cards />
        <Pay />
        <Wall />
        <Try />
        </>
    )
};
export default Pricing;