import React from 'react';

const ShopNowBanner = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-10 gap-x-10 gap-y-10 mt-5'>
            <div>
                <a href="#">      <img className='rounded-3xl' src="https://template.hasthemes.com/jantrik/jantrik/img/banner/2.png" alt="" /></a>
          
            </div>
            <div>
                <a href="#"><img className=' rounded-3xl' src="https://template.hasthemes.com/jantrik/jantrik/img/banner/1.png" alt="" /></a>
                
            </div>
            
        </div>
    );
};

export default ShopNowBanner;