import React, { lazy, Suspense } from 'react';
import Loading from '../../Components/Shared/Loader/Loader';

const LazyLoaded = lazy(() => import ('./Platform'));

function Platform(){
    return(
       <>
         <Suspense fallback={<Loading />}>
            <LazyLoaded />
        </Suspense>
       </>
    )
};
export default Platform;