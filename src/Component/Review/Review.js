import GradeIcon from '@mui/icons-material/Grade';
import React, { useEffect, useState } from 'react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import './style.module.css';
const Review = () => {
    const [Reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pacific-caverns-51824.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [Reviews]);

    return (
        <div className='px-16 rounded'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper shadow ">
                <div>
                    {
                        Reviews.map((review) => <SwiperSlide className=' bg-slate-100'>
                            <div className='text-secondary text-center'>

                                <p className='text-2xl'>
                                    <GradeIcon fontSize="large"/>
                                    {review.ratings}
                                    </p>
                                    <p className='text-xl'>
                                    
                                        {review.description}</p>
                                </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Review;