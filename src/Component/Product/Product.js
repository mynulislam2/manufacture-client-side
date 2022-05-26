import React, { useEffect, useState } from 'react';
import TopProducts from '../TopProducts/TopProducts';
import ProductCard from './ProductCard';

const Product = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-caverns-51824.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className=' px-10 lg:flex sm:block mt-10'>
            <div>                
                <p className='text-2xl text-secondary'>Top Products</p>

                <TopProducts></TopProducts>

            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:2/3 sm:h-3/4 gap-x-5 gap-y-3 mt-5'>
                {Products.map((product) => <ProductCard product={product}></ProductCard>)}
            </div>
        </div>

    )
};

export default Product;