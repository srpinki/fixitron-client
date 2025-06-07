import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div className='min-h-screen pt-18'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;