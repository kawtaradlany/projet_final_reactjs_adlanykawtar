import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../../assets/images/master-slide-01.jpg"
import slide2 from "../../../assets/images/master-slide-02.jpg"
import slide3 from "../../../assets/images/master-slide-03.jpg"
import banner02 from "../../../assets/images/banner-02.jpg"
import banner05 from "../../../assets/images/banner-05.jpg"
import banner03 from "../../../assets/images/banner-03.jpg"
import banner07 from "../../../assets/images/banner-07.jpg"
import banner04 from "../../../assets/images/banner-04.jpg"
import banner09 from "../../../assets/images/banner-09.jpg"



import { useState } from 'react';
export const Carousell = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {/* <img style={{ backgroundImage: `url(${slide1})` }} alt="" className='h-full w-full' /> */}
                    <img src={slide1} alt="" />
                    <Carousel.Caption>
                        <div className='bg-no-repeat w-[100%] h-[50vh] bg-slide1 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-xl'>Woman Collection 2018</p>
                                <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                                <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                            </div>   </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} alt="" />
                    <Carousel.Caption>
                        <div className='bg-no-repeat w-[100%] h-[50vh] bg-slide1 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-xl'>Woman Collection 2018</p>
                                <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                                <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} alt="" />
                    <Carousel.Caption>
                        <div className='bg-no-repeat w-[100%] h-[50vh] bg-slide1 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-xl'>Woman Collection 2018</p>
                                <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                                <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                            </div>  </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            
            {/* divaaaat */}

            <div className='flex flex-col lg:flex-row gap-8 p-6 lg:p-20'>
                <div className='flex flex-col w-full lg:w-auto gap-8'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner02} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-9 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>DRESSES</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner05} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-10 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>SUNGLASSES</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full lg:w-auto gap-8'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner03} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-10 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>WATCHES</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner07} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-9 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>FOOTERWEAR</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full lg:w-auto gap-8'>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner04} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-9 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>BAGS</button>
                        </div>
                    </div>
                    <div className='overflow-hidden relative'>
                        <img className='hover:scale-110 duration-500' src={banner09} alt="" />
                        <div className='flex justify-center'>
                            <button className='absolute bottom-10 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>ACCESSORIES</button>
                        </div>
                    </div>
                </div>
            </div>










        </>
    )
}
