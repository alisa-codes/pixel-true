import React,{useEffect} from 'react';
import Cases from '../../Components/Pages/CaseStudies/Cases';
import Wall from '../../Components/Pages/Home/Wall';
import Header from '../../Components/Shared/Header/Header';
import Try from '../../Components/Shared/Try/Try';
import AOS from 'aos';
import 'aos/dist/aos.css';
function CaseStudies(){
    useEffect(() => {
        AOS.init({
          duration: 800,
          disable: 'mobile',
          once: true,
        });
      }, []);
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