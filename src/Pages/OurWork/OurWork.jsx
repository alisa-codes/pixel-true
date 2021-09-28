import React,{useEffect} from 'react';
import Works from '../../Components/Pages/OurWork/Works';
import Header from '../../Components/Shared/Header/Header';
import Custom from "../../Components/Pages/Home/Custom";
import Try from "../../Components/Shared/Try/Try";
import AOS from 'aos';
import 'aos/dist/aos.css';
function OurWork(){
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
        <Works />
        <Custom />
        <Try />
        </>
    )
};
export default OurWork ;