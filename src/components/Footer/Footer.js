import { Link } from 'gatsby';
import React from 'react';
import {
    main,
    wrapper,
    col,
    titleWrapper,
    titleStyle,
    descriptionStyle,
    contactWrapper,
    contactLabel,
    contactLabelStyle,
    contactValue,
    contactValueStyle,
    copyright
} from './style.module.scss'
const Footer = () => {
    return (
        <div className={main}>
            <div className={wrapper}>
                <div className={col}>
                    <div className={titleWrapper}>
                        <p className={titleStyle}>mPowa</p>
                    </div>
                    <p className={descriptionStyle}>mPowa, a member of the SA Youth Network, is a mobile app for South African youth, providing them with location-based and profile-specific information about services relating to employment, education and entrepreneurship in their vicinity.</p>
                </div>
                <div className={col}>
                    <div className={titleWrapper}>
                        <p className={titleStyle}>Contact Us</p>
                    </div>
                    <div className={contactWrapper}>
                        <div className={contactLabel}>
                            <p className={contactLabelStyle}>Address</p>
                        </div>
                        <div className={contactValue}> <p className={contactValueStyle}>Suite U8 • Mark Shuttleworth Street • The Innovation Hub • Lynnwood, Pretoria • 0087</p>
                        </div>
                    </div>
                    <div className={contactWrapper}>
                        <div className={contactLabel}>
                            <p className={contactLabelStyle}>Phone</p>
                        </div>
                        <div className={contactValue}> <p className={contactValueStyle}>+27 (12) 844 0240</p>
                        </div>
                    </div>
                    <div className={contactWrapper}>
                        <div className={contactLabel}>
                            <p className={contactLabelStyle}>Email</p>
                        </div>
                        <div className={contactValue}> <p className={contactValueStyle}><Link to="info@mpowa.mobi"/>info@mpowa.mobi</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={copyright}>© mPowa 2021</p>
        </div>);
}

export default Footer;
