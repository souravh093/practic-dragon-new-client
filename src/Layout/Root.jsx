import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';
import RightSide from '../Pages/Shared/RightSide/RightSide';

const Root = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 container mx-auto'>
                <div className='col-span-3'>
                    <LeftSide />
                </div>
                <div className='col-span-6'>
                    <Outlet />
                </div>
                <div className='col-span-3'>
                    <RightSide />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;