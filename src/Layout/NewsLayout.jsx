import React from 'react';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-12 container mx-auto'>
                <div className='col-span-9'>
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