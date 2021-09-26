import React from 'react';
import './Styles/Pay.scss';
import image from '../../../Assets/cards/pay.svg';
function Pay(){
    return(
        <div className="pay">
            <p className="title">All our plans are backed by a 14 day money-back guarantee.<br/> No Contracts, cancel anytime.</p>
        <div className="main">
          <img src={image} />
          <div className="content">
              <h1>Pay As You Go</h1>
              <ul>
                  <li><span>$350 </span>for 1 Illustration</li>
                  <li><span>$450 </span> for 1 Landing Page / UI Design</li>
                  <li><span>$350 </span>for 1 Logo Design</li>
                  <li><span>$350 </span>for 1 Animation</li>

              </ul>
          </div>
        </div>
        </div>
    )
};
export default Pay;