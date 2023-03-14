import React from 'react';
import Nav from './../Nav';

const NavbarLayout = () => {
    return (
        <>
            <header className='fixed flex justify-between items-center
            w-[100%] top-0 p-3 bg-black opacity-70 z-100 mb-'>
                    <div className='mx-10'>
                        <h4 className='text-white'>Logo</h4>
                    </div>
                    <div>
                        <Nav/>
                    </div>
            </header>
        </>
    );
}

export default NavbarLayout;
