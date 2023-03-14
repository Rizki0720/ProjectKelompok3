import React from 'react';

const Navitems = ({children}) => {
    return (
        <>
            <li>
                <a href='/#' className='text-white'>{children}</a>
            </li> 
        </>
    );
}

export default Navitems;
