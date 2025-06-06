import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Header></Header>
            <div className="min-h-[calc(100vh-325px)] pt-18">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;