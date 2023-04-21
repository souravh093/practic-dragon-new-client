import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import RightSide from '../Pages/Shared/RightSide/RightSide';
import Footer from '../Pages/Shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 container mx-auto'>
                <div className='col-span-9 px-10'>
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

export default NewsLayout;