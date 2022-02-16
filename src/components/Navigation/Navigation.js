import React from 'react'
import { navigation } from './style.module.scss'
import NavItem from '../NavItem/NavItem'
function Navigation() {
    const links = [{
        label: 'Home',
        id: 'intro',
        link: '/'
    }, {
        label: 'About',
        id: 'first',
        link: '/about'
    },
    {
        label: 'Blogs',
        id: 'blogs',
        link: '/Blogs'
    }]
    return (
        <div className={navigation}>
            {links.map((c, i) => {
                return (
                    <NavItem key={i} text={c.label} id={c.id} link={c.link}></NavItem>
                )
            })}
        </div>
    )
}

export default Navigation