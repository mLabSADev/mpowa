import React from 'react';
import { stack, learnMore } from './style.module.scss'
const Button = ({ text }) => {
    return <div className={stack}>
        <p className={learnMore}>{text}</p>
    </div>;
}

export default Button;
