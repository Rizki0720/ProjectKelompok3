import React from 'react';
import { AiOutlineArrowRight} from 'react-icons/ai';
import MainContentLayout from './mainContent.layout';

const MainLayout = () => {
    return (
        <>
        
        <div className='bg-black w-full h-full bg-cover mt-4 flex justify-center items-center flex-col' >
            <div className='text-center pt-10  text-white'>
                <h1 className='text-5xl font-bold'>Iphone 14</h1>
                <h3 className='text-2xl mt-3'> A huge leap in battery life.</h3>
                <h3 className='text-2xl'> Two great sizes. Now in yellow</h3>
                <p className='text-gray-600 mt-3'> Available starting level 3.14</p>
                <div className='flex justify-center items-center gap-5 text-blue-500 mt-3'>
                    <a href='/#'  className='flex items-center gap-2' >Learn More <AiOutlineArrowRight className='mt-1'/> </a>
                    <a href='/#' className='flex items-center gap-2' > Shop <AiOutlineArrowRight className='mt-1'/></a>
                </div>
                
                    <img src='/assets/iphone-14-pro-max-deep-purple.jpg' 
                         alt='iphone14'
                         className='w-500 mt-4'/>
                
            </div> 
        </div>

        <MainContentLayout/>
   
            
       
        
    </>
    );
}

export default MainLayout;
