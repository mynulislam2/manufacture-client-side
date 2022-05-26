import {
    Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3RXeJls38fMjgwJr0jnqITXW3zuvwxPFwQwUXNFHNFSj1BnrmAJzFf0FALL7SkZZSnLjGSJrhClbJDD19XuGae00jR2AKMt0');

const Payment = () => {
    const{id}=useParams()
    const [PaymentDetail, setPaymentDetail] = useState([]);
useEffect(() => {
    fetch(`https://pacific-caverns-51824.herokuapp.com/pay/${id}`,{
        headers:{
            authorization:`Bearer ${localStorage?.getItem('accessToken')}`
            },
    })
    .then(res=>res.json())
    .then(data=>setPaymentDetail(data))
}, [id]);    
console.log(PaymentDetail?.price);
    return (
        <div>
            <Elements stripe={stripePromise}>
<CheckoutForm PaymentDetail={PaymentDetail}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;