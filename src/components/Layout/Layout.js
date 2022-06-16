import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Newsletter from '../Newsletter';

function Layout({ savedCount }) {
    return (
        <div className="layout">
            <Navbar savedCount={savedCount} />
            <Outlet />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Layout