import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://pacific-caverns-51824.herokuapp.com/makeadmin',{
            headers:{
                authorization:`Bearer ${localStorage?.getItem('accessToken')}`
                },
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    console.log(Users);
    const confirmAdmin = (id) => {
        swal({
            title: "Are you sure to make him admin?",
            text: "Once ,you make admin. you will not be able to recover this",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://pacific-caverns-51824.herokuapp.com/makeadmin/${id}`, {
                        method: 'PUT', // or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({admin:'true'})
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
                        <th>Id</th>
                        <th>email</th>
                        <th>make</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((User, index) => {
                        return <tr>
                            <th>{index + 1}</th>
                            <td>{User?._id}</td>
                            <td>{User?.email}</td>
                            <td>{(User?.email && !User?.admin)? <button onClick={() => confirmAdmin(User?._id)} className='btn btn-success'>Make admin</button>:"admin"}</td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;