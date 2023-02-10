import logo from '../images/logo.svg';
import fbIcon from '../images/fbIcon.svg';
import instIcon from '../images/inst-icon.svg'
import linkedinIcon from '../images/linkedin-icon.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Link to="/">
                <img src={ logo } alt="Logo of ADC" />
            </Link>
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/process">Process</Link>
                </li>
                <li>
                    <Link to="/about-us">About us</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>    
            </ul> 
            <ul className='lang-select'>
                <li>
                    <Link to="/">UA</Link> 
                </li>
                <li>
                    <Link to="/">EN</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/'><img src={fbIcon} alt="" /></Link>
                </li>
                <li> 
                    <Link to="https://www.instagram.com/_aaavramenko_/"><img src={instIcon} alt="" /></Link>
                </li>
                <li>
                    <Link to='/'><img src={linkedinIcon} alt="" /></Link>
                </li>
            </ul>
        </>
    )
} 

export default NavBar;