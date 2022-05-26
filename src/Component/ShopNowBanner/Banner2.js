import React, { useEffect, useState } from 'react';
import Banner2Card from './Banner2Card';

const Banner2 = () => {
    const [Banner2Data, setBanner2Data] = useState([]);
useEffect(() => {
    fetch('./jsonData/Banner.json')
    .then(res => res.json())
    .then(data => setBanner2Data(data))
}, []);
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 px-10 mx-auto'>
            {Banner2Data.map((data)=><Banner2Card data={data}></Banner2Card>)}
        </div>
    );
};

export default Banner2;