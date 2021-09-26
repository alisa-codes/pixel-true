import React, { lazy, Suspense } from 'react';
import Loading from '../../Components/Shared/Loader/Loader';

const LazyLoaded = lazy(() => import ('./Pricing'));

function Pricing(){
    return(
       <>
         <Suspense fallback={<Loading />}>
            <LazyLoaded />
        </Suspense>
       </>
    )
};
export default Pricing;