import React from 'react';
import { layoutStyle } from './style.module.scss'
import Footer from './Footer/Footer';
const Layout = (props) => {
    return (<div className={layoutStyle}>
        {props.children}
        <Footer />
    </div>);
}

export default Layout;
