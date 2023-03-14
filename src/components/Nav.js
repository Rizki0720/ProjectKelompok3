import React from 'react';
import {BiSearch} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Navitems from './Navitems';
const Nav = () => {
    return (
        <div>
            <ul className='flex justify-center items-center gap-8 mr-32 '>
                <Navitems>Store</Navitems>
                <Navitems>iPhone</Navitems>
                <Navitems>iPad</Navitems>
                <Navitems>Mac</Navitems>
                <Navitems>Aksesoris</Navitems>
                <BiSearch className='text-white'/>
                <AiOutlineShoppingCart className='text-white'/>
            </ul>
        </div>
    );
}

export default Nav;
