import React from 'react';
import { layout, videoBG } from './style.module.scss'
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
const Layout = (props) => {

    return (<div className={layout}>
        <Navigation />
        {props.children}
        <Footer />
    </div>);
}

export default Layout;
