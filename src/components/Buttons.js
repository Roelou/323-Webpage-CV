import React from 'react';
import './Buttons.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];

export const Button= ({children, type, onClick, btnStyle, btnSize}) => {
    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
    const checkBtnSize = SIZE.includes(btnSize) ? btnSize : SIZE[0]

    return(

        <Link to='/contact-me' className='btn-mobile'>
            <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
              {children}
            </button>
        </Link>
        
    ); 
};



