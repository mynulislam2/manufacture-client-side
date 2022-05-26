import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Component/firebase.init';

const PurchaseForm = ({ OrderQuantity, DetailData, Order }) => {
    const minimumOrder = DetailData?.minimumOrder
    const AvailableQuantity = DetailData?.AvailableQuantity
    const [user, loading, error] = useAuthState(auth)
    const [Error, setError] = useState('');
    const [Disable, setDisable] = useState(false);
    let Total = DetailData?.price * DetailData?.minimumOrder;
    if (OrderQuantity) {
        Total = DetailData?.price * OrderQuantity
    }

    const purchase = (event) => {
        event.preventDefault()
        if (OrderQuantity < minimumOrder) {
            setError("please add more item")
            setDisable(true)
        }
        else if (AvailableQuantity < OrderQuantity) {
            setError("please reduce some item")
            setDisable(true)
        }
        const userName = event.target.userName.value
        const userEmail = event.target.userEmail.value
        const userAddress = event.target.userAddress.value
        const userPhoneNumber = event.target.userPhoneNumber.value
        const ProductName = event.target.ProductName.value
        const Quantity = event.target.Quantity.value
        const data = { userName, userEmail, userAddress, userPhoneNumber, ProductName, Quantity, Total }
        fetch('https://pacific-caverns-51824.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <div className='px-8 lg:w-1/3 sm:w-full  gap-x-20 mx-auto'>
            <div className=' mt-5'>
                <form onSubmit={purchase} className='grid grid-cols-1 gap-y-3 text-secondary'>
                    <input type="text"
                        value={user?.displayName}
                        name="userName"
                        class="input input-bordered input-accent w-full" />
                    <input type="email" placeholder="Type here"
                        name='userEmail'
                        value={user?.email}
                        class="input input-bordered input-accent w-full " />
                    <input type="text" placeholder="address"

                        name='userAddress'
                        class="input input-bordered input-accent w-full " />
                    <input type="number" placeholder="Phone number"
                        name='userPhoneNumber'
                        class="input input-bordered input-accent w-full " />
                    <input type="text"
                        value={DetailData?.name}
                        name='ProductName'
                        class="input input-bordered input-accent w-full " />
                    <input type="number"
                        value={Order ? OrderQuantity : DetailData?.minimumOrder}
                        name='Quantity'
                        class="input input-bordered input-accent w-full " />
                    <p className='text-red-500'>{Error || error}</p>

                    <input disabled={OrderQuantity < minimumOrder || AvailableQuantity < OrderQuantity ? Disable : false} type="submit" value="purchase" className='btn btn-primary' />
                </form>
            </div>
        </div>

    );
};

export default PurchaseForm;