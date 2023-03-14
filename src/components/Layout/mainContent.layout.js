import React from 'react';
import { AiOutlineArrowRight} from 'react-icons/ai';
import {FaApple} from 'react-icons/fa'
const MainContentLayout = () => {
    return (
        <>
            <div className='bg-black w-full h-full bg-cover mt-4 flex justify-center items-center flex-col' >
            <div className='text-center pt-10  text-white'>
                <h1 className='text-5xl font-bold flex justify-center'> <FaApple/> WATCH</h1>
                <h5 className='text-2xl mt-1 text-red-700'> Series 8</h5>
                <h3 className='text-2xl'>A healthy leap ahead</h3>
                <div className='flex justify-center items-center gap-5 text-blue-500 mt-3'>
                    <a href='/#'  className='flex items-center gap-2' >Learn More <AiOutlineArrowRight className='mt-1'/> </a>
                    <a href='/#' className='flex items-center gap-2' > Shop <AiOutlineArrowRight className='mt-1'/></a>
                </div>
                    <img src='/assets/apple_watch_series_8.jpg' 
                        alt='iphone14'
                        className='w-96 mt-10'/>
            </div> 
        </div>
        <div className='block lg:flex lg:justify-center lg:items-center'>
            <div className='bg-white w-full h-full bg-cover mt-4 flex justify-center items-center flex-col' >
                <div className='text-center pt-12 '>
                    <h1 className='text-5xl font-bold flex justify-center mb-2'> iPad</h1>
                    <h3 className='text-2xl'>Loveable. Drawable. Magical</h3>
                    <div className='flex justify-center items-center gap-5 text-blue-500 mt-3'>
                        <a href='/#'  className='flex items-center gap-2' >Learn More <AiOutlineArrowRight className='mt-1'/> </a>
                        <a href='/#' className='flex items-center gap-2' > Shop <AiOutlineArrowRight className='mt-1'/></a>
                    </div>
                        <img src='/assets/iPad.jpg' 
                            alt='iphone14'
                            className='w-96 mt-10'/>
                </div> 
            </div>
            <div className='bg-black w-full h-full bg-cover mt-4 flex justify-center items-center flex-col' >
                <div className='text-center pt-16 text-white'>
                    <h1 className='text-5xl font-bold flex justify-center mb-2'> MacBook Pro</h1>
                    <h3 className='text-2xl'>Supercharged by M2 Pro and M2 Max</h3>
                    <div className='flex justify-center items-center gap-5 text-blue-500 mt-3'>
                        <a href='/#'  className='flex items-center gap-2' >Learn More <AiOutlineArrowRight className='mt-1'/> </a>
                        <a href='/#' className='flex items-center gap-2' > Shop <AiOutlineArrowRight className='mt-1'/></a>
                    </div>
                        <img src='/assets/MacbookWalpaper.jpg' 
                            alt='iphone14'
                            className='w-96 pb-3 '/>
                </div> 
            </div>
        </div>
        </>
    );
}

export default MainContentLayout;
