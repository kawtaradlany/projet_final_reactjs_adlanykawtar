import React from 'react';
import img from "../../../assets/images/bg-contact.jpg"

export const Section1 = () => {

    return (
        <>
            <div className="h-52 flex justify-center items-center" style={{ backgroundImage: `url(${img})` }}>
                <h1 className='text-white text-5xl'>CONTACT</h1>
            </div>
            <div className='bg-white h-[10vh]'>
            </div>
            <div className=' flex lg:justify-center gap-10 flex-col lg:flex-row'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.058438495082!2d-7.536426624302653!3d33.6037881733292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1707919099653!5m2!1sen!2sma" width="400" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex flex-col gap-3'>
                    <h6>Send us your message</h6>
                    <input type="text " placeholder='Name' className='border p-2 w-[25vw]' />
                    <input type="email " placeholder='Email' className='border p-2' />
                    <input type="number " placeholder='Phone' className='border p-2' />
                    <textarea name="" id="" cols="30" rows="10" className='border h-25 p-2' placeholder='Message'></textarea>
                    <button className='text-white bg-black rounded-full w-[10vw] h-10'>SEND</button>
                </div>
                <div className='bg-white h-[10vh]'>
                </div>

            </div>
        </>
    );
};

