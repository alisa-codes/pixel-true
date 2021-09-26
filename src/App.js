import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import Banner from './Components/Pages/Home/Banner';
import Parts from './Components/Pages/Home/Parts';
import Designers from './Components/Pages/Home/Designers';
import Custom from './Components/Pages/Home/Custom';
import Works from './Components/Pages/Home/Works';
import Try from './Components/Shared/Try/Try';
import Wall from './Components/Pages/Home/Wall';
import Header from './Components/Shared/Header/Header';
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: 'mobile',
      once: true,
    });
  }, []);
  return (
    <div className="App">
      <Header />
    <Banner />
    <Designers />
    <Parts />
    <Works />
    <Custom />
    <Wall />
    <Try />
    </div>
  );
}

export default App;
