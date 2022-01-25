import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { statsCard, iconStyle, statStyle, labelStyle } from './style.module.scss'
const Stats = ({ color, icon, label, number }) => {
    return <div className={statsCard} style={{ backgroundColor: color }}>
        <FontAwesomeIcon className={iconStyle} icon={icon} />
        <p className={statStyle}>{number}</p>
        <p className={labelStyle}>{label}</p>
    </div>;
}

export default Stats;
