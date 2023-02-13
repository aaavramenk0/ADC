import logo from '../images/HomePage/footer-logo.svg';
import fbIcon from '../images/NavBar/fbIcon.svg';
import instIcon from '../images/NavBar/inst-icon.svg'
import linkedinIcon from '../images/NavBar/linkedin-icon.svg'
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return (
        <footer className='footer'>
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
                    About Us
                </li>
                <li>
                    Projects
                </li>   
            </ul> 
            <div className='social-media__div'>
                <h3>Follow us</h3>
                <ul className='social-media__list'>
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
            </div>
            <div className='contacts'>
                {/* <input type="tel">+1 706 802 23 73</input>
                <input type="email">info@adc-web.com</input> */}
            </div>
            
        </footer>
    )
}

export default Footer;