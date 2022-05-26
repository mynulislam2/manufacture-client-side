import React from 'react';
import Banner from '../../Component/Banner/Banner';
import BusinessSummary from '../../Component/BuissnessSummary/BusinessSummary';
import Banner2 from '../../Component/ShopNowBanner/Banner2';
import Product from '../../Component/Product/Product';
import ShopNowBanner from '../../Component/ShopNowBanner/ShopNowBanner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
<Banner2></Banner2>
            <Product></Product>
            <ShopNowBanner></ShopNowBanner>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;