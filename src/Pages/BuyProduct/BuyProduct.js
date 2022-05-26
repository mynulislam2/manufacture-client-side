import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BueProduct.css';
import PurchaseForm from './PurchaseForm';
const BuyProduct = () => {
    const { id } = useParams()
    const [DetailData, setDetailData] = useState();
    const [Order, setOrder] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/tool/${id}`)
            .then(res => res.json())
            .then(data => setDetailData(data[0]))
    }, []);
    const orderIncrement = () => {
        setOrder(Order + 1)
    }
    const orderDecrement = () => {
        setOrder(Order - 1)
    }
    let OrderQuantity
    if (Order > 0) {
        OrderQuantity = Order
    }

    return (<>        <div className='flex justify-center'>
        <div class="card lg:card-side bg-base-100 lg:w-2/3 sm:w-full shadow-sm  px-8">
            <figure><img className='w-60' src={DetailData?.image} alt="Album" /></figure>
            <div class="card-body text-accent">
                <h2 class="card-title text-xl">{DetailData?.name}</h2>
                <hr />
                <p className='text-sm flex-grow-0'>{DetailData?.description}</p>
                <hr />
                <div className='flex'>
                    <p>minimum order:{DetailData?.minimumOrder}</p>
                    <p>Available:{DetailData?.AvailableQuantity}</p>
                    <p>Price:{DetailData?.price}</p>
                </div>
                <div className='flex gap-x-2 mt-4'>
                    <button className='btn btn-primary' onClick={orderDecrement}>-</button>
                    <input type="number" aria-controls='false'
                        value={Order ? OrderQuantity : DetailData?.minimumOrder}
                        name="OrderQuantity" className='input input-bordered input-accent text-accent w-20 text-center' />
                    <button className='btn btn-primary' onClick={orderIncrement}>+</button>
                </div>
                <p>{Error}</p>
            </div>
        </div>
    </div>
        <PurchaseForm OrderQuantity={OrderQuantity} DetailData={DetailData} Order={Order}></PurchaseForm>

    </>


    );
};

export default BuyProduct;