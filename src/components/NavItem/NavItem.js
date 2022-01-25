import React from 'react';
import { main, label } from './style.module.scss'
// import { Link } from 'gatsby';
const NavItem = ({ text, id }) => {
    return <a id={id} href={`#${id}`} className={main}>
        <p className={label}>{text}</p>
    </a>;
}

export default NavItem;
