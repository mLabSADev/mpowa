import React from 'react';
import { layoutStyle, videoBG } from './style.module.scss'
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
const Layout = (props) => {

    return (<div className={layoutStyle}>
        {/* <Navigation /> */}
        {props.children}
        <Footer />
    </div>);
}

export default Layout;
