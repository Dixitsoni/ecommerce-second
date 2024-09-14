import DefaultLayout from '@/app/defaultlayout'
import React from 'react'

function Cart() {
  return (
    <DefaultLayout>
      <div className="untree_co-section before-footer-section">
        <h1 className='text-center pb-5'>Cart</h1>
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <img src="/assets/images/714zgLTdMHL.jpg" alt="Image" className="img-fluid" />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">Product 1</h2>
                      </td>
                      <td>$49.00</td>
                      <td>
                        <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-black decrease" type="button">−</button>
                          </div>
                          <input type="text" className="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                          <div className="input-group-append">
                            <button className="btn btn-outline-black increase" type="button">+</button>
                          </div>
                        </div>

                      </td>
                      <td>$49.00</td>
                      <td><a href="#" title='Delete product' className="btn btn-black btn-sm">X</a></td>
                    </tr>

                    <tr>
                      <td className="product-thumbnail">
                        <img src="/assets/images/61uedUo-R7L.jpg" alt="Image" className="img-fluid" />
                      </td>
                      <td className="product-name">
                        <h2 className="h5 text-black">Product 2</h2>
                      </td>
                      <td>$49.00</td>
                      <td>
                        <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{ maxWidth: "120px" }}>
                          <div className="input-group-prepend">
                            <button className="btn btn-outline-black decrease" type="button">−</button>
                          </div>
                          <input type="text" className="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                          <div className="input-group-append">
                            <button className="btn btn-outline-black increase" type="button">+</button>
                          </div>
                        </div>

                      </td>
                      <td>$49.00</td>
                      <td><a href="#" title='Delete product' className="btn btn-black btn-sm">X</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                {/* <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                </div> */}
                {/* <div className="col-md-6">
                  <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="text-black h4" for="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-6 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div>
                <div className="col-md-5">
                  <button className="btn btn-black">Apply Coupon</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">$230.00</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <a href='/page/checkout' className="btn btn-black btn-lg py-3 btn-block">Proceed To Checkout</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Cart