import React from 'react';
import { layout, videoBG } from './style.module.scss'
import Footer from './Footer/Footer';
const Layout = (props) => {

    return (<div className={layout}>
        {props.children}
        <Footer />
    </div>);
}

export default Layout;
