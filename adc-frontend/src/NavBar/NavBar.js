import { useState, useRef, useEffect } from 'react';
import { links, social } from './data';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/NavBar/logo.svg';
import styles from './NavBar.module.css';
import {motion} from 'framer-motion'

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
                        {!showLinks && <FaBars /> /* if showLinks == false => we display hamburger icon*/}
                        {showLinks && <FaTimes /> /* if showLinks == true => we display close icon*/}
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
                {/* Add dynamic styles depending on the website language */}
                <ul className={styles.languages }>
                    <Link to='/ua'><li style={{color: '#898F9C'}}>UA</li></Link> 
                    <li style={{color: '#898F9C'}}>|</li>
                    <Link to='/'><li style={{color: '#4267b2','fontWeight' : 600}}>EN</li></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;