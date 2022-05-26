import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';
import auth from '../../Component/firebase.init';
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [MyOrders, setMyOrders] = useState([]);
    console.log(MyOrders);
    useEffect(() => {
        fetch(`https://pacific-caverns-51824.herokuapp.com/order/?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage?.getItem('accessToken')}`
                },
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user?.email]);
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

        <>


            <div class=" w-full">
                <table class="table bg-white w-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                            <th>Order Cancel</th>
                            <th>Order payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MyOrders.map((MyOrder, index) => {
                            return <tr>
                                <th>{index + 1}</th>
                                <td>{MyOrder.userName}</td>
                                <td>{MyOrder.userAddress}</td>
                                <td>{MyOrder.ProductName}</td>
                                <td>{MyOrder.Quantity}</td>
                                <td>{MyOrder.price}</td>
                                <td>{(MyOrder.price && !MyOrder?.paid) && <button onClick={() => confirmDelete(MyOrder?._id)} className='btn btn-error'>cancel</button>}</td>
                                <td>{(MyOrder.price && !MyOrder?.paid) ? <Link to={`/pay/${MyOrder?._id}`}> <button className='btn btn-success'>pay</button></Link> : <p>paid</p>}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>


    );
};

export default MyOrders;