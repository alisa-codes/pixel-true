import React, { lazy, Suspense } from 'react';
import Loading from '../../Components/Shared/Loader/Loader';

const LazyLoaded = lazy(() => import ('./OurWork'));

function OurWork(){
    return(
       <>
         <Suspense fallback={<Loading />}>
            <LazyLoaded />
        </Suspense>
       </>
    )
};
export default OurWork ;
