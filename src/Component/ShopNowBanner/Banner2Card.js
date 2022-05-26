import React from 'react';

const Banner2Card = ({data}) => {
    return (
        <div className='mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={data?.image} alt="Shoes" /></figure>
                <div class="card-body mt-10 text-white">
                    <h2 class=" text-white text-lg font-bold">{data?.tittle}</h2>
                    <p className='text-white text-2xl  flex-grow-0 font-bold'>{data?.subTittle}</p>
                    <div class="justify-start">
                        <button class="btn border-gray-500 text-secondary" style={{backgroundColor:"rgb(218 237 251)"}}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2Card;