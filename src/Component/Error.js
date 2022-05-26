import React from 'react';
import NotFound from '../Images/404.jpg';
const Error = () => {
    return (
        <div className='flex justify-center'>
            <img className=' h-screen ' src={NotFound} alt="" srcset="" />
        </div>
    );
};

export default Error;