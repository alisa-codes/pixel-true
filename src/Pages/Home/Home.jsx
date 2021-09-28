import Banner from "../../Components/Pages/Home/Banner";
import Custom from "../../Components/Pages/Home/Custom";
import Designers from "../../Components/Pages/Home/Designers";
import Parts from "../../Components/Pages/Home/Parts";
import Wall from "../../Components/Pages/Home/Wall";
import Works from "../../Components/Pages/Home/Works";
import Header from "../../Components/Shared/Header/Header";
import Loading from "../../Components/Shared/Loader/Loader";
import Try from "../../Components/Shared/Try/Try";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from 'react';


function Home(){
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
        <Designers />
        <Parts />
        <Works />
        <Custom />
        <Wall />
        <Try />
        </>
    )
};
export default Home ;