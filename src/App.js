import logo from './logo.svg';
import './App.css';
import { lazy, Suspense,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Loading from './Components/Shared/Loader/Loader';
import ScrollToTop from './ScrollToTop';
const Home = lazy(() => import ('./Pages/Home/Home'))
const CaseStudies = lazy(() => import ('./Pages/CaseStudies/CaseStudies'))
const Pricing = lazy(() => import ('./Pages/Pricing/Pricing'))
const OurWork = lazy(() => import ('./Pages/OurWork/OurWork'))
const Platform = lazy(() => import ('./Pages/Platform/Platform'))




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
         <ScrollToTop />
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/case-studies' component={CaseStudies} />
          <Route exact path ='/pricing' component={Pricing} />
          <Route exact path ='/our-work' component={OurWork} />
          <Route exact path ='/our-platform' component={Platform} />
          <Redirect to="/" />

        </Switch>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
