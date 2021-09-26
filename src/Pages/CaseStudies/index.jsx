import Loading from '../../Components/Shared/Loader/Loader';
import React from 'react';
import { Suspense ,lazy} from 'react';
const LazyLoaded = lazy(() => import ('./CaseStudies'));

function CaseStudies(){
    return(
        <Suspense fallback={<LazyLoaded />}>
            <LazyLoaded />
        </Suspense>
    )
};
export default CaseStudies ;
