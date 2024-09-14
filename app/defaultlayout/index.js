import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            {/* <Sidebar /> */}
            <Footer />
        </div>
    )
}

export default DefaultLayout