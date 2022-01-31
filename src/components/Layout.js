import React from 'react';
import { layout, videoBG } from './style.module.scss'
import Footer from './Footer/Footer';
const Layout = (props) => {
    return (<div className={layout}>
        <video className={videoBG} controls="" >
            <source src="../assets/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {props.children}
        <Footer />
    </div>);
}

export default Layout;
