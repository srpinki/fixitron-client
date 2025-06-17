import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';
import { AuthContext } from './Context';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    
    
    if(loading){
        return <Loading></Loading>
    }
    
    if(!user){
        return <Navigate state={location?.pathname} to="/auth/login"></Navigate>
    }

    return children;
};

export default PrivateRoute;