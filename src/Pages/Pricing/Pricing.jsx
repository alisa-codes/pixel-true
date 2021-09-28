import React,{useEffect} from 'react';
import Cards from '../../Components/Pages/Pricing/Cards';
import Pay from '../../Components/Pages/Pricing/Pay';
import Header from '../../Components/Shared/Header/Header';
import Wall from '../../Components/Pages/Home/Wall';
import Try from '../../Components/Shared/Try/Try';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Pricing(){
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
        <Cards />
        <Pay />
        <Wall />
        <Try />
        </>
    )
};
export default Pricing;