import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Registration.css';

const Registration = () => {
    let navigate = useNavigate();
    const [errors, setErrors] = useState('');
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const HandleSignUp = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        console.log(name);
        const email = event.target.email.value
        const password = event.target.password.value
        const checked = event.target.check.checked
        const confirmPassword = event.target.confirmPassword.value
        if (checked && password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            setErrors('')
            await updateProfile({ displayName: name });
        }
        else if (password !== confirmPassword) {
            setErrors('please recheck your email,passwords ')
        }
        else if (!checked) {
            setErrors("Please checkout our terms and condition")
        }

    }
    if (!error && user) {
        swal("Successfully Registered!", "check your email to verify");
        navigate('/')
    }
    return (
        <div className='container text-secondary'>
            <div>


                {
                    loading || updating && <div style={{ height: "100vh" }} className='flex justify-center items-center'> <CircularProgress />  </div>
                }
                <div className={`card w-1/3 mx-auto border-0 shadow rounded my-1 ${loading && "registration"}`}>
                    <div className="p-4">
                        <div className=" text-center mb-5">Sign Up</div>
                        <form onSubmit={HandleSignUp} className="text-secondary">
                            <div>

                                <input type="text"
                                    name="name"
                                    required
                                    placeholder="mynul islam" class="input w-full  input-bordered" />
                            </div>
                            <div className='mt-3'>

                                <input type="email"
                                    name="email"
                                    required
                                    placeholder="name@example.com" class="input w-full  input-bordered" />
                            </div>
                            <div className='mt-3'>
                                <input type="password" placeholder="Password" name="password" required
                                    class="input input-bordered w-full" />
                            </div>
                            <div className='mt-3'>
                                <input type="password" placeholder="confirm Password" name="confirmPassword" required
                                    class="input input-bordered w-full" />
                            </div>



                            <div className='flex items-center gap-x-4'>
                                <input type="checkbox" name='check' class="checkbox mt-3 border-slate-500" />
                                <p className='mt-2'>terms and condition</p>
                            </div>


                            {error && <p className=' text-red-600'>{error?.message.slice(22)}</p>}
                            {errors && <p className='text-red-600'>{errors}</p>}
                            <div className="mb-2 mt-3">
                                <input className='btn btn-outline w-full text-secondary hover:bg-red-500 '
                                    type="submit" value="sign up" />
                            </div>
                            <div className='mb-3'>
                                <small >are you new ?  <Link to='/login' >Please Sign In</Link></small>
                            </div>
                            <hr />
                            <SocialMedia></SocialMedia>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;