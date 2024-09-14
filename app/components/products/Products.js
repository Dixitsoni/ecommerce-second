import React from 'react'

function Products() {
    return (
        <>
            <div className="product-section">
                <div className='pt-3 pb-3'>
                    <div>
                        <h1 className='text-center pb-5'>Special Offer</h1>
                    </div>
                    <div className='pt-5 row p-5'>
                        <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0 position-offer-product">
                            <a className="product-item" href="/page/product">
                                <img style={{ height: 200 }} width={300} src="assets/images/61uedUo-R7L.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                <div className="price-container price-position">
                                    <div className="price">
                                        <span className="number">30%</span>
                                        <span className="label">Free</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0 position-offer-product">
                            <a className="product-item" href="/page/product">
                                <img style={{ height: 200 }} width={300} src="assets/images/61uedUo-R7L.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                <div className="price-container price-position">
                                    <div className="price">
                                        <span className="number">20%</span>
                                        <span className="label">Free</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0 position-offer-product">
                            <a className="product-item" href="/page/product">
                                <img style={{ height: 200 }} width={300} src="assets/images/61uedUo-R7L.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                <div className="price-container price-position">
                                    <div className="price">
                                        <span className="number">15%</span>
                                        <span className="label">Free</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0 position-offer-product">
                            <a className="product-item" href="/page/product">
                                <img style={{ height: 200 }} width={300} src="assets/images/61uedUo-R7L.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>

                                {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                <div className="price-container price-position">
                                    <div className="price">
                                        <span className="number">25%</span>
                                        <span className="label">Free</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                {/* <div className='pb-5 container'>
                    <div className='row border'>
                        <div className='col-6'>
                            <img src='/assets/images/091621-166-UPDATED-BANNERS-FOR-ACE-MARKET-UPDATED-CATEGORIES-OILS.webp' alt='bumperoffer' />
                        </div>
                        <div className='col-1'></div>
                        <div className='col-4 pt-5 relative-position'>
                            <div className='bumper-offer'>
                                <h2>Bumper Damaka Offer</h2>
                            </div>
                            <div className="price-container price-position-bumper-offer">
                                <div className="price">
                                    <span className="number">30%</span>
                                    <span className="label">Free</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='pt-5'>
                    <h1 className='text-center pb-5'>Desi Ghee Products</h1>
                    <div className="mt-5">
                        <div className="row">
                            {/* <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                    </div> */}

                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/61uedUo-R7L.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Nordic Chair</h3>
                                    <strong className="product-price">$50.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>

                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/81pZKXclsaL.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Kruzo Aero Chair</h3>
                                    <strong className="product-price">$78.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/714zgLTdMHL.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/buffalow-ghee-1.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/ghee-A2.jpg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/purecowghee.webp" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/ProductGroup_646b505374203-productgroup-635bcdf41cb2b-cow-ghee-original-back.webp" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/product.jpeg" className="img-fluid product-thumbnail ghee-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            {/* <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="product.html">
                            <img width={250} src="assets/images/714zgLTdMHL.jpg" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Ergonomic Chair</h3>
                            <strong className="product-price">$43.00</strong>

                            <span className="icon-cross">
                                <img src="assets/images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div> */}

                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'beige' }} className='pt-5'>
                    <h1 className='text-center p-2'>Oil Products</h1>
                    <div className="mt-5 pt-5">
                        <div className="row">
                            {/* <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" className="btn">Explore</a></p>
                    </div> */}
                            <div className="col-12 col-md-3 col-lg-3 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Nordic Chair</h3>
                                    <strong className="product-price">$50.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>

                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Kruzo Aero Chair</h3>
                                    <strong className="product-price">$78.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 mb-5 mt-5 mb-md-0">
                                <a className="product-item" href="/page/product">
                                    <img width={300} src="assets/images/featured-oil-v2.png" className="img-fluid product-thumbnail oil-thumbnail" />
                                    <h3 className="product-title">Ergonomic Chair</h3>
                                    <strong className="product-price">$43.00</strong>

                                    {/* <span className="icon-cross">
                                        <img src="assets/images/cross.svg" className="img-fluid" />
                                    </span> */}
                                </a>
                            </div>
                            {/* <div className="col-12 col-md-3 col-lg-3 mb-5 mb-md-0">
                        <a className="product-item" href="cart.html">
                            <img width={250} src="assets/images/714zgLTdMHL.jpg" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Ergonomic Chair</h3>
                            <strong className="product-price">$43.00</strong>

                            <span className="icon-cross">
                                <img src="assets/images/cross.svg" className="img-fluid" />
                            </span>
                        </a>
                    </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products