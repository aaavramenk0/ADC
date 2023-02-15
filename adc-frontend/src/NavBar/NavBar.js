/* import logo from '../images/NavBar/logo.svg';
import fbIcon from '../images/NavBar/fbIcon.svg';
import instIcon from '../images/NavBar/inst-icon.svg'
import linkedinIcon from '../images/NavBar/linkedin-icon.svg'
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar__container'>
            <div className="logo"> 
                <Link to="/">
                    <img src={ logo } alt="Logo of ADC" />
                </Link>    
            </div>
            
            
            <ul className='links'>
                <li>
                    Process
                </li>
                <li>
                    About us
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact us
                </li>    
            </ul> 
            <ul className='social-media'>
                <li>
                    <Link to='/'><img src={fbIcon} alt="" /></Link>
                </li>
                <li> 
                    <Link to="https://www.instagram.com/_aaavramenko_/" target="_blank"><img src={instIcon} alt="" /></Link>
                </li>
                <li>
                    <Link to='/'><img src={linkedinIcon} alt="" /></Link>
                </li>
            </ul>
            <ul className='languages'>
                <li>
                    <Link to="/">UA</Link> 
                </li>
                <li>
                    |
                </li>
                <li>
                    <Link to="/">EN</Link>
                </li>
            </ul>
        </div>
    )
} 

export default NavBar;
*/

import { useState, useRef, useEffect } from 'react';
import { links, social } from './data';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import logo from '../images/NavBar/logo.svg';
import styles from './NavBar.module.css'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false); // state for show/hide links depends on screen width
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    
    const toggleLinks = () => { // function for show/hide links using the state
        setShowLinks(!showLinks); // toggle the state of the links
    };

    useEffect(() => { // hook which is used to tell React what should be done after render 
        // getBoundingClientRect() returns a DOMRect object providing information about the size of an element and its position relative to the viewport (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
        const linksHeight = linksRef.current.getBoundingClientRect().height;  
        // if showLinks == true
        if (showLinks) { 
            // set the height of the linksContainerRef equals to linksHeight
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else { // if showLinks == false
            // set the height of the linksContainerRef equals to 0 (hide the container)
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]); // this effect only works if showLinks state is updated

    return ( // what is component returns
        <nav>
            <div className={styles['nav-center']}>
                <div className={styles['nav-header']}>
                    <Link to='/'><img src={logo} className={styles.logo} alt='logo' /></Link>
                    <button className={styles['nav-toggle']} onClick={toggleLinks}>
                        <FaBars/>
                    </button>
                </div>
                <div className={styles['links-container']} ref={linksContainerRef}>
                    <ul className={styles.links} ref={linksRef}>
                    {links.map((link) => { // mapping through the list of links inside the data.js
                        const { id, url, text } = link; // id = link.id; url = link.url; text = link.text
                            return ( // what the function returns
                            <li key={id}> 
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                    </ul>
                </div>
                <ul className={styles['social-icons']}>
                    {social.map((socialIcon) => { // mapping through the list of social inside the data.js
                        const { id, url, icon } = socialIcon; // id = socialIcon.id; url = socialIcon.url; icon = socialIcon.icon
                        return ( // what the function returns
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
                {/* Add dynamic styles depending on the website language*/}
                <ul className={styles.languages }>
                    <li style={{color: '#898F9C'}}>UA</li>
                    <li style={{color: '#898F9C'}}>|</li>
                    <li style={{color: '#4267b2','fontWeight' : 600}}>EN</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;