import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../firebase.init';

const ResetPass = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const HandleSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        sendPasswordResetEmail(email)
        swal("Please check your email", "")
    }


    return (
        <div className="container text-secondary">

            <div>

                {
                    sending && <div style={{ height: "100vh" }} className='flex justify-center items-center'> <CircularProgress />  </div>
                }

                <div className={`card w-1/3 mx-auto border-0 shadow  my-1 ${sending && "registration"}`}>
                    <div className="p-4 p-sm-5">
                        <div className="text-center text-secondary mb-5">Sign Up</div>
                        <form onSubmit={HandleSignUp}>
                            <div>

                                <input type="email"
                                    name="email"
                                    required
                                    placeholder="name@example.com" class="input w-full  input-bordered" />
                            </div>
                            <div className='mt-3 text-secondary'>
                                <Link to="/login" >Login your account</Link>
                            </div>

                            {error && <p className=' text-red-500'>{error?.message.slice(22)}</p>}
                            <div className="mb-2 mt-3">
                                <input className='btn btn-outline w-full text-secondary hover:bg-red-500'
                                    type="submit" value="reset pass" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResetPass;