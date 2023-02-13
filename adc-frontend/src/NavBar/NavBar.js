import logo from '../images/NavBar/logo.svg';
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