import React from 'react';
import { AiOutlineArrowRight} from 'react-icons/ai';
const HeroLayout = () => {

    return (
        <>
            <div className=' mt-14'>
                <h6 className='text-center'>Get $200–$600 in credit toward iPhone 14 or iPhone 14 
                Pro when you trade in iPhone 11 or higher <a href='/#' className='text-blue-500'> Shop iPhone</a></h6>
            </div>
            <div className='bg-hero-section w-full h-full bg-cover' >
                <div className='text-center pt-10 pb-64'>
                    <h1 className='text-5xl font-bold'>Iphone 14</h1>
                    <h3 className='text-2xl mt-3'> A huge leap in battery life.</h3>
                    <h3 className='text-2xl'> Two <span></span> sizes. Now in yellow</h3>
                    <p className='text-gray-600 mt-3'> Available starting level 3.14</p>
                    <div className='flex justify-center items-center gap-5 text-blue-500 mt-3'>
                        <a href='/#'  className='flex items-center gap-2' >Learn More <AiOutlineArrowRight className='mt-1'/> </a>
                        <a href='/#' className='flex items-center gap-2' > Shop <AiOutlineArrowRight className='mt-1'/></a>
                    </div>
                </div> 
            </div>   
        </>
    );
}

export default HeroLayout;
