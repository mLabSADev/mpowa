import React from 'react';
import {
    cardMain,
    iconWrapper,
    iconStyle,
    cartTitleWrapper,
    cardTitle,
    cardText,
} from './style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Card = ({ title, icon, text, color }) => {
    return <div className={cardMain}>
        <div className={iconWrapper}>
            <FontAwesomeIcon style={{ color: color }} className={iconStyle} icon={icon} />
        </div>
        <div className={cartTitleWrapper}>
            <p className={cardTitle}>{title}</p>
        </div>
        <p className={cardText}>{text}</p>
    </div>
}

export default Card;
