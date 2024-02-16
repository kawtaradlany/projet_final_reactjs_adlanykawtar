
import React, { createContext, useState } from 'react'
import product1 from '../assets/images/item-15.jpg'
import product2 from '../assets/images/item-13.jpg'
import product3 from '../assets/images/item-04.jpg'
import product4 from '../assets/images/item-11.jpg'

import product5 from '../assets/images/item-05.jpg'
import product6 from '../assets/images/item-06.jpg'
import product7 from '../assets/images/item-07.jpg'
import product8 from '../assets/images/item-08.jpg'
import product9 from '../assets/images/item-09.jpg'
import product10 from '../assets/images/item-10.jpg'
import product11 from '../assets/images/item-11.jpg'
import product12 from '../assets/images/item-12.jpg'
import product13 from '../assets/images/item-13.jpg'
import product14 from '../assets/images/item-14.jpg'
import product15 from '../assets/images/item-15.jpg'
import product16 from '../assets/images/item-16.jpg'
import product17 from '../assets/images/item-17.jpg'
import accessoir1 from "../assets/images/accessoire (1).jpg"
import accessoir2 from "../assets/images/accessoire (2).jpg"
import accessoir3 from "../assets/images/accessoire (3).jpg"
import accessoir4 from "../assets/images/accessoire (4).jpg"
import accessoir5 from "../assets/images/accessoire (5).jpg"
import accessoir6 from "../assets/images/accessoire (6).jpg"
import accessoir7 from "../assets/images/accessoire (7).jpg"
import accessoir8 from "../assets/images/accessoire (8).jpg"
import womenclothes1 from "../assets/images/womenclothes (1).jpg"
import womenclothes2 from "../assets/images/womenclothes (2).jpg"
import womenclothes3 from "../assets/images/womenclothes (3).jpg"
import womenclothes4 from "../assets/images/womenclothes (4).jpg"
import womenclothes5 from "../assets/images/womenclothes (5).jpg"
import womenclothes6 from "../assets/images/womenclothes (6).jpg"

import espa1 from "../assets/images/espa (1).jpg"
import espa2 from "../assets/images/espa (2).jpg"
import espa3 from "../assets/images/espa (3).jpg"
import espa4 from "../assets/images/espa (4).jpg"
import espa5 from "../assets/images/espa (5).jpg"



// import product1 from '../assets/img/item-15.jpg'




export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id:"1",
            name: 'Boxy7 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product1,

            price: '$20.00',
            taile: ['s', 'm', 'l', 'xl'],
            gender: `women`,
            category: 'NEW',
            quantity: 1,
        },

        {            id:"2",

            name: 'Boxy6 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product2,
            price: '$20.00',
            taile: ['s', 'm', 'l', 'xl'],
            gender: `women`,
            category: 'OLD'
            ,
            quantity: 1,
        },

        {
            id:"3",

            name: 'Boxy5 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product3,
            price: '$20.00',
            taile: ['s', 'm', 'l', 'xl'],
            gender: `women`,
            category: 'SALE',
            quantity: 1,
        },

        {
            id:"4",

            name: 'Boxy4 T-Shirt with Roll Sleeve',
            desc: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....',
            img: product4,
            price: '$20.00',
            taile: ['s', 'm', 'l', 'xl'],
            gender: `women`,
            category: 'SALE',


        },


        {
            id:"5",

            name: 'item5',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product5,
            price: 24.00,
            gender: `women`,
            category: 'OLD'
            ,
            quantity: 1,
        },

        {
            id:"6",

            name: 'item6',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product6,
            price: 26.00,
            gender: `women`,
            category: 'OLD'
            ,
            quantity: 1,
        },

        {
            id:"7",

            name: 'item7',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product7,
            price: 27.00,
            gender: `women`,
            category: 'OLD'
            ,
            quantity: 1,
        },

        {
            id:"8",

            name: 'item8',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product8,
            price: 28.00,
            gender: `women`,
            category: 'NEW'
            ,
        },

        {
            id:"9",

            name: 'item9',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product9,
            price: 29.00,
            gender: `women`,
            category: 'NEW'
            ,
        },

        {
            id:"10",

            name: 'item10',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product10,
            price: 30.00,
            gender: `women`,
            category: 'NEW'
            ,
        },
        {
            id:"11",

            name: 'item11',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product11,
            price: 31.00,
            gender: `women`,
            category: 'NEW'
            ,
        },
        {
            id:"12",

            name: 'item12',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product12,
            price: 32.00,
            gender: `women`,
            category: 'SALE',
        },
        {
            id:"13",

            name: 'item13',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product13,
            price: 33.00,
            gender: `women`,
            category: 'SALE',
        },
        {
            id:"14",

            name: 'item14',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product14,
            price: 40.00,
            gender: `women`,
            category: 'OLD'
            ,
        },
        {
            id:"15",

            name: 'item15',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product15,
            price: 50.00,
            gender: `women`,
            category: 'OLD'
            ,
        },
        {
            id:"16",

            name: 'item16',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product16,
            price: 60.00,
            gender: `women`,
            category: 'NEW'
            ,
        },
        {
            id:"17",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: product17,
            price: 70.00,
            gender: `women`,
            category: 'SALE',
        }
        ,
        {
            id:"18",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir1,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"19",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir2,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"20",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir3,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"21",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir4,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"22",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir5,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"23",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir6,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"24",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir7,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        },
        {
            id:"25",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: accessoir8,
            price: 70.00,
            gender: `men`,
            category: 'accessoire'
        }


        ,
        {
            id:"25",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: womenclothes1,
            price: 70.00,
            gender: `men`,
            category: 'women'
        }
        ,
        {
            id:"26",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: womenclothes2,
            price: 70.00,
            gender: `men`,
            category: 'women'
        },
        {
            id:"27",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: womenclothes3,
            price: 70.00,
            gender: `men`,
            category: 'women'
        },
        {
            id:"28",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: womenclothes4,
            price: 70.00,
            gender: `men`,
            category: 'women'
        },
        {
            id:"29",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: womenclothes5,
            price: 70.00,
            gender: `men`,
            category: 'women'
        },
        {
            id:"30",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: womenclothes6,
            price: 70.00,
            gender: `men`,
            category: 'women'
        }





        ,
        {
            id:"31",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: espa1,
            price: 70.00,
            gender: `men`,
            category: 'espa',
        },
        {
            id:"32",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: espa2,
            price: 70.00,
            gender: `men`,
            category: 'espa',
        },
        {
            id:"33",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: espa3,
            price: 70.00,
            gender: `men`,
            category: 'espa',
        },
        {
            id:"34",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: espa4,
            price: 70.00,
            gender: `men`,
            category: 'espa',
        },
        {
            id:"35",

            name: 'item17',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Numquam nobis, doloribus et obcaecati labore ullam vitae eum cumque eius odio.',
            img: espa5,
            price: 70.00,
            gender: `men`,
            category: 'espa',
        },
    ])








    return (
        <>
            <MyContext.Provider value={[data, setData]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
