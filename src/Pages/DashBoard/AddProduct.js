import React from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://pacific-caverns-51824.herokuapp.com/addproduct',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
            .then(res => res.json())
            .then(data => console.log(data))
    };
    return (
        <div className='text-secondary w-1/3 mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='input input-bordered input-accent w-full mt-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='input input-bordered input-accent w-full mt-2' placeholder='image link' {...register("image", { required: true,  })} />
                <input className='input input-bordered input-accent w-full mt-2' placeholder='minimumOrder' type="number" {...register("minimumOrder", { required: true })} />
                <input className='input input-bordered input-accent w-full mt-2' placeholder='AvailableQuantity' type="number" {...register("AvailableQuantity", { required: true })} />
                <input className='input input-bordered input-accent w-full mt-2' placeholder='price' type="number" {...register("price", { required: true })} />
                <textarea rows={4} className='textarea 
                        textarea-accent w-full mt-2' placeholder='description' {...register("description", { required: true })} />
                <input className='btn w-full mt-2 btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;