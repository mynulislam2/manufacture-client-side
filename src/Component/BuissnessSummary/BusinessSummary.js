import React from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PeopleIcon from '@mui/icons-material/People';
import ConstructionIcon from '@mui/icons-material/Construction';
const BusinessSummary = () => {
    return (
        <div className='flex justify-center'>
                    <div className='grid lg:grid-cols-4
                    sm:grid-cols-2 gap-y-10  my-20 px-10 gap-x-52'>
            <div>
                <p className='text-2xl text-slate-700'><PaidIcon sx={{ fontSize: 60,color:"#141414" }}></PaidIcon> 2000</p>
            </div>
            <div>
                <p className='text-2xl text-slate-700'><PeopleIcon sx={{ fontSize: 60,color:"#141414" }}></PeopleIcon>3030+</p>
            </div>
            <div>
                <p className='text-2xl text-slate-700'><ReviewsIcon sx={{ fontSize: 60,color:"#141414" }}></ReviewsIcon>200+</p>
            </div>
            <div>
                <p className='text-2xl text-slate-700'>
                    <ConstructionIcon sx={{ fontSize: 60,color:"#141414" }}></ConstructionIcon> 3000
                </p>
            </div>
        </div>
        </div>

    );
};

export default BusinessSummary;