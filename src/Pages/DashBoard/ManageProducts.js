import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-caverns-51824.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

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
                        <th>name</th>
                        <th>minimum Order</th>
                        <th>Available Quantity</th>
                        <th>price</th>
                        <th>Delete Product </th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((Product, index) => {
                        return <tr>
                            <th>{index + 1}</th>
                            <td>{Product?.name}</td>
                            <td>{Product?.minimumOrder}</td>
                            <td>{Product?.AvailableQuantity}</td>
                            <td>{Product?.price}</td>
                            <td> <button onClick={() => confirmDelete(Product?._id)} className='btn btn-success'>cancel</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;