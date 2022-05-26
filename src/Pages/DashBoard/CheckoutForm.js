import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ PaymentDetail }) => {
    const { _id } = PaymentDetail
    let Price;
    if (PaymentDetail?.price) {
        Price = PaymentDetail?.price
    }
    const stripe = useStripe();
    const elements = useElements();
    const [ErrorCard, setErrorCard] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [Success, setSuccess] = useState('');
    const [TransactionID, setTransactionID] = useState('');
    useEffect(() => {
        if (Price) {
            fetch("https://pacific-caverns-51824.herokuapp.com/create-payment-intent", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Price }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data?.clientSecret)
                    }
                })
        }
    }, [Price]);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setErrorCard(error?.message || '')
        setSuccess('')
        const { paymentIntent, error: paymentIntentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: PaymentDetail?.userName,
                        email: PaymentDetail?.userEmail,
                    },
                },
            },
        );
        if (paymentIntentError) {
            setErrorCard(paymentIntentError?.message)
        }
        else {
            setErrorCard('')
            setTransactionID(paymentIntent.id)
            setSuccess('Congratulation! your payment is success')

        }
    };
    if (Success) {
        const payment = {
            id: _id,
            TransactionID: TransactionID
        }
        fetch(`https://pacific-caverns-51824.herokuapp.com/order/${_id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payment)
        })

            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='px-16 lg:w-2/4 sm:w-full mx-auto gap-x-10'>
            <div className='card w-full border-accent shadow-lg mx-auto mt-10 mb-10 text-slate-800'>
                {ErrorCard && <p className='text-center text-error'>{ErrorCard}</p>}
                {Success && <p className='text-center text-success'>your Transaction is {TransactionID} <br />{Success}</p>}
                <form onSubmit={handleSubmit} className="card-body">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button type="submit" className='btn btn-primary' disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </form>

            </div>


            <div class="card text-accent  h-40 bg-base-100 shadow-xl   mt-5">
                <div class="card-body flex-grow-0">
                    <h2 class="card-title">Order Summary</h2>
                    <p>Product Name :{PaymentDetail.ProductName}</p>
                    <p>Product Name :{PaymentDetail.Quantity}</p>
                    <p>Product Name :{PaymentDetail.price}</p>
                </div>
            </div>
        </div>

    );
};

export default CheckoutForm;