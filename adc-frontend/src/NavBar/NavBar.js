import { useState, useRef, useEffect } from 'react';
import { links, social } from '../data/navbar';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/NavBar/logo.svg';
import './NavBar.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false); // state for show/hide links depends on screen width
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const [isUA, setIsUA] = useState(false);
    
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
    
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return ( // what is component returns
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <a href="/"><img src={logo} className='logo' alt='logo' /></a>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        {!showLinks && <FaBars /> /* if showLinks == false => we display hamburger icon*/}
                        {showLinks && <FaTimes /> /* if showLinks == true => we display close icon*/}
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => { // mapping through the list of links inside the data.js
                            const { id, url, text } = link; // id = link.id; url = link.url; text = link.text
                            return ( // what the function returns
                            <li key={id}> 
                                <a href={url} onClick={() => setShowLinks(false)}>{text}</a>
                            </li>
                        )})}
                    </ul>
                    
                </div>
                {/*<ul className='social-icons'>
                    {social.map((socialIcon) => { // mapping through the list of social inside the data.js
                        const { id, url, icon } = socialIcon; // id = socialIcon.id; url = socialIcon.url; icon = socialIcon.icon
                        return ( // what the function returns
                            <li key={id}>
                                <a href={url} target='_blank' rel='noreferrer'>{icon}</a>
                            </li>
                        );
                    })}
                </ul> */}
                {/* Add dynamic styles depending on the website language 
                <ul className='languages'>
                    <Link to='/ua' onClick={isUA => setIsUA(true)}><li className={`${isUA ? 'active-lang' : 'lang'}`}>UA</li></Link> 
                    <li style={{color: '#898F9C'}}>|</li>
                    <Link to='/' onClick={isUA => setIsUA(false)}><li className={`${!isUA ? 'active-lang' : 'lang'}`}>EN</li></Link>
                </ul>*/}
                {user && (
                    <div className='logout-button-div'>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                )}
                {!user && (
                    <div className='auth-div'>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;