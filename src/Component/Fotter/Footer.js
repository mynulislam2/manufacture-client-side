import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 text-secondary gap-y-5 gap-x-24 px-10 py-10'>
            <div>
                <p className='text-xl'>Contact Us</p>
                <p>Your address goes here.</p>
                <p>Mail Us: demo@example.com</p>
                <p>Phone: 0123456789</p>

            </div>
            <div>
                <p className='text-xl'>Information</p>
                <p>Site Map</p>
                <p>Specials</p>
                <p>Jobs</p>
                <p>Delivery Information</p>
                <p>Order History</p>
                <p>Privacy Policy</p>
            </div>
            
            <div>
                <p className='text-xl'>Customer Service</p>
                <p>My Account</p>
                <p>Gift Cards</p>
                <p>Return Policy</p>
                <p> Your Orders</p>
                <p>Subway</p>

            </div>
            <div>
                <p className='text-xl'>Let Us Help You</p>
                <p>Your Account</p>
                <p> Your Orders</p>
                <p>Shipping</p>
                <p>Amazon Prime</p>
                <p>Replacements</p>
                <p>Manage</p>

            </div>
        </div>
        </div>

    );
};

export default Footer;