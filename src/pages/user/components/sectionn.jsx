import React from 'react';

export const Sectionn = () => {
    return (
        <>
            <div className="container mx-auto p-4 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 text-center text-[#e8342c]">Happy to see u again !</h1>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-4 w-[50%] justify-center items-center">
                    <input type="text" placeholder='Your Name' className='p-1 rounded-xl text-center' />
                    <input type="email" placeholder='your email' className='p-1 rounded-xl text-center' />
                    <input type="password" placeholder='password' className='p-1 rounded-xl text-center' />
                    <button className='hover:bg-[#e8342c] lg:w-[20%] w-[40%] bg-slate-400 rounded-xl border-none'>LOGIN</button>
                </div>

            </div>





        </>
    );
};

