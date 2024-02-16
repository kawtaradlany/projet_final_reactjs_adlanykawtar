import React, { useContext, useState } from 'react';
import { MyContext } from "../../../utils/ContextProvider"
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';


export const Section1 = () => {
    const [data, setData] = useContext(MyContext)
    console.log(data);

    // const allCatg = data.filter((element, index) => {

    //     if (element.category == 'OLD') {

    //     } return element.category == 'OLD'
    // }
    // )

    // const womenCatg = data.filter((element, index) => {

    //     if (element.category == 'NEW') {

    //     } return element.category == 'NEW'
    // }
    // )

    // const accessoirCatg = data.filter((element, index) => {

    //     if (element.category == 'SALE') {

    //     } return element.category == 'SALE'
    // }
    // )
    // const basketCatg = data.filter((element, index) => {

    //     if (element.category == 'SALE') {

    //     } return element.category == 'SALE'
    // }
    // )
    const navigate = useNavigate()

    const [newData, setNewData] = useState([...data])


    const handlButtonFilter = (e) => {
        if (e == `women`) {
            setNewData(data.filter(element => element.category == `women`))
        }
        if (e == `accessoire`) {
            setNewData(data.filter(element => element.category == `accessoire`))
        }
        if (e == `espa`) {
            setNewData(data.filter(element => element.category == `espa`))
        }
        if (e == `all`) {
            setNewData([...data])

        }
    }


    const { addItem } = useCart();














    return (
        <>
            <div className='h-fit flex' >
                {/* side bar filter */}
                <div className=' w-[25%] h-fit flex flex-col items-center p-11   '>

                    <h2 className='font-extrabold text-2xl'>Catégories</h2>
                    <div className='text-start mr-11 text-gray-400 flex flex-col items-start'>

                        <button onClick={(e) => { handlButtonFilter(e.target.value) }} className='py-2 ' value={`all`}>ALL</button>
                        <button onClick={(e) => { handlButtonFilter(e.target.value) }} className='py-2 ' value={`women`} >Women</button>
                        <button onClick={(e) => { handlButtonFilter(e.target.value) }} className='py-2 ' value={`espa`}>Basket</button>
                        <button onClick={(e) => { handlButtonFilter(e.target.value) }} className='py-2 ' value={`accessoire`}>Accessoires</button>
                    </div>
                    <h2 className='font-extrabold text-2xl  w-[8vw] py-2'>Size</h2>
                    <div className='text-start mr-11  text-gray-400 flex flex-col w-[5vw]'>

                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> XS</label></div>
                        <div className='py-3'> <input type="checkbox" /> <label htmlFor=""> S</label></div>
                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> M</label></div>
                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> L</label></div>
                        <div className='py-3'><input type="checkbox" /> <label htmlFor=""> XL</label></div>
                    </div>
                </div>
                {/* products */}

                <div className=' w-[75%] h-fit  text-gray-500 flex flex-wrap flex-row gap-6 p-10 border-l-2'>


                    {
                        newData.map((element, index) =>
                           

                            <div className=' h-fit  group '>
                                <div class="group  relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                    <div class="h-96">
                                        <img class="w-full h-full object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                    </div>
                                    <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                        <button onClick={() => addItem(element)} class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"

                                        >ADD TO CART</button>
                                        
                                    </div>

                                </div>
                                <div>
                                    <h1 onClick={() => navigate(`/product/${element.name}`)} className='text-gray-600 cursor-pointer hover:text-orange-400 text-lg duration-300'>{element.name}</h1>
                                    <h1 className='text-gray-600 cursor-pointer'>{element.price}</h1>
                                </div>
                            </div>




                        )
                    }

                </div>

            </div>
        </>
    );
};

