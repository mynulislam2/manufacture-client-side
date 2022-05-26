import React from 'react';

const TopProductCard = ({ TopProduct }) => {
    return (
        <>
            <div className=' lg:w-44 sm:w-96 mt-10  sm:block lg:flex'>
                <div>
                    <img src={TopProduct.image} class="w-full" />
                </div>
                <div className='text-lg'>
                    <p>{TopProduct.name}</p>
                    <p>${TopProduct.price}</p>
                </div>

            </div>

        </>

    );
};

export default TopProductCard;