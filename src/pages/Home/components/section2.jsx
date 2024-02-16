import React, { useContext } from 'react';
import { MyContext } from "../../../utils/ContextProvider"
import { useNavigate, useParams } from 'react-router-dom';
import { Carousell } from './carousel';
import { Tabs } from 'flowbite-react';
import img from "../../../assets/images/banner-08.jpg"
import img2 from "../../../assets/images/shop-item-09.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blog1 from "../../../assets/images/blog-08.jpg"
import blog2 from "../../../assets/images/blog-09.jpg"
import blog3 from "../../../assets/images/blog-10.jpg"




export const Section2 = () => {
    const [data, setData] = useContext(MyContext)

    const categoryy = data.filter((element, index) => {

        if (element.category == 'OLD') {

        } return element.category == 'OLD'
    }
    )

    const categoryy1 = data.filter((element, index) => {

        if (element.category == 'NEW') {

        } return element.category == 'NEW'
    }
    )

    const categoryy2 = data.filter((element, index) => {

        if (element.category == 'SALE') {

        } return element.category == 'SALE'
    }
    )
    const navigate = useNavigate()

    // const { name } = useParams()






    return (
        <>




            <div className='flex justify-center w-full'>
                <Tabs aria-label="Tabs with underline" style="underline" className='flex justify-center w-full'>
                    <Tabs.Item active title="SALE">
                        <div className='flex flex-col lg:flex-row gap-6'>
                            {
                                categoryy2.map((element, index) =>
                                    <div className='flex flex-col items-center lg:w-1/3'>
                                        <img onClick={() => navigate(`/product/${element.name}`)} src={element.img} alt="" />
                                        <h6>{element.name}</h6>
                                        <h6>{element.price}</h6>
                                    </div>
                                )
                            }
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="NEW" >
                        <div className='flex flex-col lg:flex-row gap-6'>
                            {
                                categoryy1.map((element, index) =>
                                    <div className='flex flex-col items-center lg:w-1/3'>
                                        <img onClick={() => navigate(`/product/${element.name}`)} src={element.img} alt="" />
                                        <h6>{element.name}</h6>
                                        <h6>{element.price}</h6>
                                    </div>
                                )
                            }
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="OLD" >
                        <div className='flex flex-col lg:flex-row gap-6'>
                            {
                                categoryy.map((element, index) =>
                                    <div className='flex flex-col items-center lg:w-1/3'>
                                        <img onClick={() => navigate(`/product/${element.name}`)} src={element.img} alt="" />
                                        <h6>{element.name}</h6>
                                        <h6>{element.price}</h6>
                                    </div>
                                )
                            }
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>
            <div>
                <section className='flex flex-lg-row gap-4 pl-[10%] pr-[10%] pt-[5%] pb-[5%] section3 w-[100%] ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>


                    <div className='shop flex flex-col items-center text-white  pt-[15%] gap-4 bg-no-repeat  w-[100%] ' style={{ backgroundImage: `url(${img}) `, backgroundSize: 'contain' }} >
                        <h1>The Beauty <br />LOOKBOOK</h1>
                        <h6><a className='text-decoration-none  text-white ' href="">VIEW COLLECTION</a></h6>
                    </div>
                    <div className='shop2 flex flex-col items-center text-reset pt-[25%] w-[100%]  ' style={{ backgroundImage: `url(${img2}) `, backgroundSize: 'contain' }}>
                        <p>Boxy2 T-Shirt with Roll Sleeve</p>
                        <h6>$20.00</h6>

                    </div>

                </section>




            </div>
            <div>

                <div>

                    <h1 className='text-center pt-5'>OUR BLOG</h1>


<div className='flex flex-col lg:flex-row items-center justify-center lg:h-75 lg:gap-4'>
    <div className='lg:flex lg:items-center lg:justify-center lg:flex-1 lg:w-full lg:max-w-[25rem]'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" className='cart' src={blog1} />
            <Card.Body>
                <Card.Title>Black Friday Guide: Best Sales & Discount Codes</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    <div className='lg:flex lg:items-center lg:justify-center lg:flex-1 lg:w-full lg:max-w-[25rem]'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" className='cart' src={blog2} />
            <Card.Body>
                <Card.Title>The White Sneakers Nearly Every Fashion Girls Own</Card.Title>
                <Card.Text>
                    Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque
                    mattis augue id euismod. Inter-dum et...
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    <div className='lg:flex lg:items-center lg:justify-center lg:flex-1 lg:w-full lg:max-w-[25rem]'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" className='cart' src={blog3} />
            <Card.Body>
                <Card.Title>New York SS 2018 Street Style: By Annina Mislin</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
</div>

                </div>



            </div>


            <div className="follow xl:h-[50vh] p-5 xl:block flex flex-col justify-evenly">
                <p className="text-4xl font-bold text-center pt-4">
                    @ FIND US ON INSTAGRAM !
                </p>

                <div className="all_last flex xl:flex-row flex-col justify-evenly items-center xl:h-[100%] xl:gap-0 gap-16">
                    <div className="first xl:w-[20%] ">
                        <p className="text-2xl font-thin text-center">
                            Free Delivery WorldWide
                        </p>
                        <p className="text-md font-thin text-center">
                            Mirum est notare quam littera gothica
                        </p>
                    </div>

                    <div className="second xl:w-[20%] border-l ">
                        <p className="text-2xl font-thin text-center">30 Days Return</p>
                        <p className="text-md font-thin text-center">
                            Simply return it within 30 days for an exchange.
                        </p>
                    </div>

                    <div className="third xl:w-[20%] border-l">
                        <p className="text-2xl font-thin text-center">Store Opening</p>
                        <p className="text-md font-thin text-center">
                            Shop open from Monday to Sunday
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

