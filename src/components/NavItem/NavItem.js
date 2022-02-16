import React from 'react';
import { main, label } from './style.module.scss'
import { Link } from 'gatsby';
const NavItem = ({ text, id, link }) => {
    return <div>
        {link != '' ? (
            <Link id={id} to={link} className={main}>
                <p className={label}>{text}</p>
            </Link>) : (
            <a id={id} href={`#${id}`} className={main}>
                <p className={label}>{text}</p>
            </a>)}
    </div>;
}

export default NavItem;
