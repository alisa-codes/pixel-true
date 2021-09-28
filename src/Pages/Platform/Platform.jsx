import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from 'react';
import Banner from '../../Components/Pages/Platform/Banner';
import Parts from '../../Components/Pages/Platform/Parts';
import Header from '../../Components/Shared/Header/Header';
import Wall from '../../Components/Pages/Home/Wall';
import Try from '../../Components/Shared/Try/Try';

function Platform(){
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
        <Banner />
        <Parts />
        <Wall />
        <Try />
        </>
    )
};
export default Platform ;