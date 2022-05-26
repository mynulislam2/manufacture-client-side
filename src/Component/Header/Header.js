import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth)
    const HandleSignOut = (event) => {
        const values = event.target.value
        console.log(values);
        signOut(auth)
    }
    return (
        <div class="navbar bg-primary w-full px-24">
            <div class="navbar-start ">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-warning lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='text-secondary'>Home</Link></li>
                        <li><Link to='/myPortfolio' className='text-secondary'>My Portfolio</Link></li>
                        <Link to='Blogs' className='text-secondary'>Blogs</Link>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl text-secondary w-20 h-20 ">jontro</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/' className='text-secondary'>Home</Link></li>

                    <li><Link to='/myPortfolio' className='text-secondary'>My Portfolio</Link></li>
                    <li><Link to='Blogs' className='text-secondary'>Blogs</Link></li>
                </ul>
            </div>
            <div class="navbar-end text-secondary">
                {user && <div class="dropdown">
                    <label tabindex="0" class="btn btn-primary m-1">{user?.displayName}</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{<Link to='/' onClick={HandleSignOut}>Log Out</Link>}</li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                }
                {!user && <Link to='/login' >Log in</Link>}

            </div>
        </div>
    );
};

export default Header;