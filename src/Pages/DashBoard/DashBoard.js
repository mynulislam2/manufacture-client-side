import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Component/firebase.init';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const [Admin, setAdmin] = useState({});
    useEffect(() => {
        fetch(`https://pacific-caverns-51824.herokuapp.com/userRegistration/${email}`,{
            headers:{
                authorization:`Bearer ${localStorage?.getItem('accessToken')}`
                },
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [user]);

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex  justify-center">
                <Outlet></Outlet>


                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='myprofile'>My Profile</Link></li>
                    {!Admin?.admin &&<><li><Link to='myorder'>My Orders</Link></li>
                    <li><Link to='addreview'>Add A Review</Link></li>
                    
                    </>}
                    {Admin?.admin &&<><li><Link to='addproduct'>Add Product</Link></li>
                    <li><Link to='makeAdmin'>Make Admin</Link></li>
                    <li><Link to='manageallorder'>Manage  all Orders</Link></li>
                    <li><Link to='manageproducts'>Manage Products</Link></li>
                    
                    </>}

                </ul>
            </div>
        </div>
    );
};

export default DashBoard;