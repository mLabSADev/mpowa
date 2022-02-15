import React from 'react'
import { navigation } from './style.module.scss'
import NavItem from '../NavItem/NavItem'
function Navigation() {
    const links = [{
        label: 'What is mPowa',
        id: 'intro',
        link: ''
    }, {
        label: 'What will you find?',
        id: 'first',
        link: ''
    }, {
        label: 'Services',
        id: 'second',
        link: ''
    }, {
        label: 'Download the App',
        id: 'cta',
        link: ''
    },
    {
        label: 'Blogs',
        id: 'blogs',
        link: '/Blog'
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