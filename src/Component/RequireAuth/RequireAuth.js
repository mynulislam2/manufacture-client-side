import { CircularProgress } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
// it will require for protected route
const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    let location=useLocation()
    if (loading) {
      return  <div style={{height:"100vh"}} className='flex justify-center items-center'> 
<CircularProgress></CircularProgress>
       </div> 
      ;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
      return children;
};

export default RequireAuth;