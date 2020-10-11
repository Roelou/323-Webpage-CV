import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Buttons';
import './Navbar.css';

function Navbar() {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <=900){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() =>{showButton()}, []);
    
    window.addEventListener('resize', showButton);
   
    return (
        <>
            <nav className = 'Navbar'>
                <div className='NavbarContainer'>
                    <Link to= '/' className='NavbarLogo' onClick={closeMobileMenu}>
                        ROELOU'S TECHNICAL CV <i className='fab fa-angrycreative'></i>
                    </Link>
                    <div className= 'HamburgerMenu' onClick={handleClick}>
                        <i className={click ? 'fas fa-bomb' : 'fas fa-align-right'} />
                    </div>
                    <ul className={click ? 'NavbarMenu active' : 'NavbarMenu'}>
                        <li className='NavbarMenuItem'>
                            <Link to='/' className='LinksToItems' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        
                        <li className='NavbarMenuItem'>
                            <Link to='/about-me' className='LinksToItems' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='NavbarMenuItem'>
                            <Link to='/contact-me' className='LinksToItemsForMenu' onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                    {button && <Button btnStyle='btn--outline'>Contact Me</Button>}
                </div>
            </nav>
                
        </>
    )
}

export default Navbar;
