import React from 'react';
import {navigation} from '../data'

const NavbarLayout = () => {
    return (
        <>
            <header className='fixed flex justify-between items-center
            w-[100%] top-0 p-3 bg-black opacity-70 z-100 mb-'>
                    <div className='mx-10'>
                        <h4 className='text-white'> Logo</h4>
                    </div>
                    <div>
                        <ul className='flex justify-center items-center gap-3 mx-20 '>
                            {navigation.map((value,index) => {
                              return  <li key={index}>
                                    <a href='/#' className='text-white'>{value.nama}</a>
                                </li>
                            })}
                        </ul>
                    </div>
            </header>
        </>
    );
}

export default NavbarLayout;
