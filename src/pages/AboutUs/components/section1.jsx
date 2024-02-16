import React from 'react';
import img from "../../../assets/images/bg-contact.jpg"
import imgirl from "../../../assets/images/girl_about.webp"


export const Section1 = () => {
    return (
        <>
            <div className="h-52 flex justify-center items-center" style={{ backgroundImage: `url(${img})` }}>
                <h1 className='text-white text-5xl'>ABOUT</h1>
            </div>
            <div className='bg-white h-[10vh]'>
            </div>
            <div className=' flex lg:justify-center gap-5 flex-col lg:flex-row '>
                <div className=''>
                    <img src={imgirl} alt="" className='w-[40w] h-[50vh]' />
                </div>
                <div className='flex w-[40%] flex-col gap-3'>
                    <h6>Send us your message</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sit molestiae, id quibusdam commodi excepturi quam dolore hic consequuntur vitae magni minima, odit quis autem non tempora esse. Odio aut veritatis possimus libero similique magnam eos quo ut quam. Consequatur deleniti repellendus tenetur obcaecati veritatis, accusamus id suscipit? Ipsa nisi velit fuga officiis sit quod quaerat doloremque? Sunt molestiae perspiciatis corporis velit natus cupiditate culpa, ducimus illo, dolor voluptatem laborum delectus omnis? Esse, praesentium aut soluta beatae cum incidunt recusandae.</p>                    <div className='p-5'>
                    <p className='border-l flex p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id excepturi necessitatibus numquam mollitia officia eligendi vel eveniet expedita temporibus porro?</p>

                    </div>
                </div>

            </div>




        </>
    );
};

