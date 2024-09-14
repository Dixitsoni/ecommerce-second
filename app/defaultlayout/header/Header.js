import React from 'react'

function Header() {
    return (
        <header className=''>
            <div>
                <h5 className='text-center bg-info p-2 text-white'>Enjoy FREE SHIPPING on orders above ₹499</h5>
            </div>
            <div className='d-flex justify-content-around align-items-center'>
                <h2>DESI GHEE</h2>
                <img width={'150px'} src='assets/images/97c387108399669.5fbd02d536a07-removebg-preview.png' alt='' />
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
                <ul class="navbar-nav m-auto">
                    <li className='nav-item active'><a class="nav-link navbar-brand text-white" href='/'>Home</a></li>
                    <li className='nav-item'><a class="nav-link navbar-brand text-white" href='/page/about'>About Us</a></li>
                    <li className='nav-item'><a class="nav-link navbar-brand text-white" href='#'>Products</a></li>
                    <li className='nav-item'><a class="nav-link navbar-brand text-white" href='/page/contact'>Contact Us</a></li>
                    <li className='nav-item product-quatity'><a class="nav-link navbar-brand text-white" href='/page/cart'><img title='go to cart' src='assets/images/cart.svg' alt='' /><span className='text-white'>1</span></a></li>
                    <li className='nav-item'><a class="nav-link navbar-brand text-white" href='/page/auth/login'><img title='login' src='assets/images/user.svg' alt='' /></a></li>
                    <li className='nav-item'><a class="nav-link navbar-brand text-white" href='/page/auth/signup'>Register</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header