import React from 'react';
import { Link } from 'react-router-dom';


// this is product card
const ProductCard = ({ product }) => {
    return (
        <div style={{height:"450px"}} class="card bg-base-100 shadow-xl">
            <figure><img className=' w-40' src={product?.image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title text-lg text-accent">
                {product?.name} 
                    <div class="badge  badge-secondary text-xs">Available:{product?.AvailableQuantity}</div>
                </h2>
                <p className='text-secondary flex-grow-0'>{product?.description}</p>
                <div class="card-actions justify-start text-accent">
                    <div>${product?.price}</div>
                    <div>min-order{product?.minimumOrder}</div>
                </div>
                <div className='mt-5 flex justify-start'>
                    <Link to={`/purchase/${product?._id}`} className='btn btn-primary'>Place Order</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;