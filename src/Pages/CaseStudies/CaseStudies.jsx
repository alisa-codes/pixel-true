import React from 'react';
import Cases from '../../Components/Pages/CaseStudies/Cases';
import Wall from '../../Components/Pages/Home/Wall';
import Header from '../../Components/Shared/Header/Header';
import Try from '../../Components/Shared/Try/Try';

function CaseStudies(){
    return(
        <>
        <Header />
        <Cases />
        <Wall />
        <Try />
        </>
    )
};
export default CaseStudies ;