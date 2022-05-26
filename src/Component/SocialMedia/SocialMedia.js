
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import auth from '../firebase.init';
const SocialMedia = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token]  = useToken(user);

    if (token) {
        navigate(from, { replace: true });

    }
    const GoogleSignIn = (event) => {
        event.preventDefault()
        signInWithGoogle()
    }


    return (
        <div>
            <div className=" mb-2 mt-4">
                <p className='text-red-600'>{error && error?.message.slice(22)}</p>
                <input onClick={GoogleSignIn} className="btn w-full text-secondary hover:text-white hover:bg-red-500 hover:border-0 " type="submit" value="Google sign in" />
            </div>

        </div>
    );
};

export default SocialMedia;