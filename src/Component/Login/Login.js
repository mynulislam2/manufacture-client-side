import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';

const Login = () => {
    const [errors, setErrors] = useState('');

    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [user, loading, error] = useAuthState(auth)
    const [
        signInWithEmailAndPassword,
        SignInUser,
        SignInLoading,
        SignInError,
    ] = useSignInWithEmailAndPassword(auth);
    if (SignInUser) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <div style={{ height: "100vh" }} className='flex justify-center items-center'> <CircularProgress />  </div>
            ;
    }



    const HandleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const checked = event.target.check.checked
        if (checked) {
            signInWithEmailAndPassword(email, password)
            setErrors("")

        }
        else if (!checked) {
            setErrors("Please checkout our terms and condition")
        }
    }
    return (
        <div className='container text-secondary'>
            <div>


                {
                    SignInLoading && <div style={{ height: "100vh" }} className='flex justify-center items-center'> <CircularProgress />  </div>
                }
                <div className={`card w-1/3 mx-auto border-0 shadow rounded my-1 ${SignInLoading && "registration"}`}>
                    <div className="p-4">
                        <div className=" text-center mb-5">Sign In</div>
                        <form onSubmit={HandleLogin} className="text-secondary">
                            <div>

                                <input type="email"
                                    name="email"
                                    required
                                    placeholder="name@example.com" class="input w-full  input-bordered" />
                            </div>
                            <div className='mt-3'>
                                <input type="password" placeholder="Password" name="password" required
                                    class="input input-bordered w-full" />
                            </div>
                            <div className='flex items-center gap-x-4'>
                                <input type="checkbox" name='check' class="checkbox mt-3 border-slate-500" />
                                <p className='mt-2'>terms and condition</p>
                            </div>



                            {SignInError && <p className=' text-red-600'>{SignInError?.message.slice(22)}</p>}
                            {errors && <p className='text-red-600'>{errors}</p>}
                            <div className="mb-2 mt-3">
                                <input className='btn btn-outline w-full text-secondary hover:bg-red-500 '

                                    type="submit" value="sign in" />
                            </div>
                            <div className='mb-3 text-center'>
                                <small >are you new ?  <Link to='/registration' >Please Sign Up</Link></small> <br />
                                <small ><Link to='/resetPass' >Reset your password</Link></small>
                            </div>


                            <hr />

                            <SocialMedia></SocialMedia>
                        </form>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;