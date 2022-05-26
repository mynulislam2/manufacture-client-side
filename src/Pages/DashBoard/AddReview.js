import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const AddReview = () => {
    const [Ratings, setRatings] = useState('');

    const ratingChanged = (newRating) => {
        setRatings(newRating)
    };
    const HandleRating = (event) => {
        event.preventDefault()
        const description = event.target.description.value
        const ReviewCollection = {
            description,
            Ratings
        }
            fetch('https://pacific-caverns-51824.herokuapp.com/reviews',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(ReviewCollection),
                }
            )
                .then(res => res.json())
                .then(data => console.log(data))
    }
    return (
        <div>
            <div >
                <form onSubmit={HandleRating}>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        activeColor="#ffd700"
                    />
                    <div>
                        <textarea name='description'
                            rows={5}
                            cols={50}
                            class="textarea 
                        textarea-warning" placeholder="Bio"></textarea>
                    </div>

                    <input type="submit" className='btn btn-primary w-full' value="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddReview;