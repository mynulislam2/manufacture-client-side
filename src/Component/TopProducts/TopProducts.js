import React, { useEffect, useState } from 'react';
import TopProductCard from './TopProductCard';

const TopProducts = () => {
    const [TopProducts, setTopProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTopProducts(data))
    }, []);
    return (
        <>

            <div class="carousel w-56 py-10 mx-auto">
                <div id="slide3" class="relative carousel-item block w-full">

                    
                    {TopProducts.map((TopProduct) => <TopProductCard TopProduct={TopProduct}></TopProductCard>)}
                    <div class=" absolute flex justify-between transform -translate-y-1/2  top-0" >

                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="relative carousel-item block w-full">
                    {TopProducts.map((TopProduct) => <TopProductCard TopProduct={TopProduct}></TopProductCard>)}
                    <div class="absolute flex justify-between transform -translate-y-1/2 top-0">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>


    );
};

export default TopProducts;