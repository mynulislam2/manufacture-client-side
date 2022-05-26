import React, { useState } from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';

const ManageAllorder = () => {
    const [Restart, setRestart] = useState(false);
    const { isLoading, error, data } = useQuery(['repoData',Restart], () =>
        fetch('https://pacific-caverns-51824.herokuapp.com/order', {
            headers: {
                authorization: `Bearer ${localStorage?.getItem('accessToken')}`
            },
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return 'Loading...'
    }
console.log(data);

    const ChangeStatus = (id) => {
        fetch(`https://pacific-caverns-51824.herokuapp.com/shipment/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ shipped: 'true' })
        })
            .then(res => res.json())
            .then(data => setRestart(true))

    }


    const confirmDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://pacific-caverns-51824.herokuapp.com/order/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))

                } else {

                    return
                }
            });
    }


    return (

            <div class=" w-full">
                <table class="table bg-white w-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>product id</th>
                            <th>product name</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>Delete Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, index) => {
                            return <tr>
                                <th>{index + 1}</th>
                                <td>{product?._id}</td>
                                <td>{product?.ProductName}</td>
                                <td>{product?.Quantity}</td>
                                <td>{product?.price}</td>
                                <td>{(product.price && !product?.paid) && <button onClick={() => confirmDelete(product?._id)} className='btn btn-error'>cancel</button>}</td>
                                <td>{(product.price && !product?.paid) && <span className='text-error text-lg'>unpaid</span>}</td>
                                <td>{(product.price && product?.paid) && <button onClick={() => ChangeStatus(product?._id)} className=' btn btn-success '>{product.shipped ? "shipped" : "pending"}</button>}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

    );
};

export default ManageAllorder;