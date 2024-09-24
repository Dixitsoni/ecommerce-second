import DefaultLayout from '@/app/defaultlayout'
import React from 'react'

function SingleProduct() {
    return (
        <DefaultLayout>
            <div className='row pb-5 p-5'>
                <h2 className='px-3 pb-5 text-info'>Product Detail</h2>
                <div className='col-1'>
                    <img width={100} className='img-fluid border mt-2' src='assets/images/buffalow-ghee-1.jpg' alt='productimage' />
                    <img width={100} className='img-fluid border mt-2' src='assets/images/buffalow-ghee-1.jpg' alt='productimage' />
                    <img width={100} className='img-fluid border mt-2' src='assets/images/buffalow-ghee-1.jpg' alt='productimage' />
                    <img width={100} className='img-fluid border mt-2' src='assets/images/buffalow-ghee-1.jpg' alt='productimage' />
                    {/* <img width={400} className='img-fluid' src='/assets/images/buffalow-ghee-1.jpg' alt='productimage' /> */}
                    {/* <img width={400} className='img-fluid' src='/assets/images/buffalow-ghee-1.jpg' alt='productimage' /> */}
                </div>
                <div className='col-3'>
                    <img width={350} className='img-fluid' src='assets/images/buffalow-ghee-1.jpg' alt='productimage' />
                </div>
                <div className='col-4'>
                    <div>
                        <h5>Sri Sri Tattva Cow Ghee - 1 Litre (Pack of 1) - Pure Cow Ghee for Better Digestion and Immunity</h5>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <p>Diet Type</p>
                            <p>Item Weight</p>
                            <p>DBrand</p>
                            <p>Flavour</p>
                            <p>Biological Source</p>
                        </div>
                        <div className='col-6'>
                            <p>Vegan</p>
                            <p>902 Grams</p>
                            <p>shop</p>
                            <p>Cow Ghee</p>
                            <p>Cow</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-info h4'>₹657 ₹65.70 per ml(₹65.70 /100 ml)</p>
                    </div>
                </div>
                <div className='col-4 border'>
                    <div>
                        <div className='text-primary'>₹657.00 <p className=''>( ₹65.70 per ml(₹65.70 /100 ml) )</p></div>
                    </div>
                    <div>
                        <p className='h5 text-success'>In stock</p>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <p>Payment</p>
                            <p>Ships from</p>
                            <p>Sold by</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-info'>Secure transaction</p>
                            <p className='text-success'>Desi GHEE</p>
                            <p className='text-primary'>Shop</p>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <p className='h6'>Quantity</p>
                            </div>
                            <div className='col-6'>
                                <input defaultValue={1} className='w-100 text-center' type='number' min={1} />
                            </div>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-6'>
                                <p className='h6'>Delivery charge</p>
                            </div>
                            <div className='col-6'>
                                <p style={{color:'#007185'}} className='h6'>60 Rs.</p>
                            </div>
                        </div>
                        <div className='col-12 text-center'>
                            <button style={{ width: '200px' }} type='button' className='btn btn-secondary p-2 mt-5 mb-4'>Add To Cart</button>
                        </div>
                        <div className='col-12 text-center'>
                            <a href={process.env.NODE_ENV==process.env.NEXT_APP_ENVIROMENT?'checkout.html':'/checkout'} style={{ width: '200px' }} type='button' className='btn  p-2 mb-5'>Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-5'>
                <div className='container pb-5'>
                    <h3 className='text-black pb-3'>About this item</h3>
                    <ul>
                        <li>Improves immunity & contributes to better nutrition.</li>
                        <li>Helps to maintain the cholesterol level.</li>
                        <li>Helps in better digestion.</li>
                        <li>NO PRESERVATIVES: We never compromise on the quality, purity, and taste of our ghee. Our pure cow's ghee is FSSAI certified which makes it safe for your consumption.</li>
                        <li>HOW TO CONSUME: Drizzle some ghee on chapatis, parathas, bread, etc. Or use it for a sizzling tadka in dals, curries, and vegetables. You can also use it as a DIY skin care remedy for glowing skin.</li>
                    </ul>
                </div>
            </div>
        </DefaultLayout>
    )
}


export default SingleProduct