import logo from '../images/HomePage/footer-logo.svg'
import fbIcon from '../images/HomePage/footer/fbIcon.svg'
import instIcon from '../images/HomePage/footer/instIcon.svg'
import linkedinIcon from '../images/HomePage/footer/linkedinIcon.svg'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    return (
        <footer className='footer' id='contacts'>
            <div > 
                <Link to="/">
                    <img src={ logo } alt="Logo of ADC" className="footer-logo" />
                </Link>    
            </div>
            
            <ul className='footer-links'>
                <li>
                   <a href="#process">Process</a> 
                </li>
                <li>
                    <a href="#about-us">About Us</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>   
            </ul> 
            <div className='social-media__div'>
                <h3>Follow us</h3>
                <ul className='social-media__list'>
                    <li>
                        <Link to='https://www.facebook.com/profile.php?id=100012455267566' target='_blank'><img src={fbIcon} alt="" /></Link>
                    </li>
                    <li> 
                        <Link to="https://www.instagram.com/_aaavramenko_/" target="_blank"><img src={instIcon} alt="" /></Link>
                    </li>
                    <li>
                        <Link to='https://www.linkedin.com/in/oleksandr-avramenko/' target="_blank"><img src={linkedinIcon} alt="" /></Link>
                    </li>
                </ul>    
            </div>
            <div className='contacts'>
                <h3 className='contacts-heading'>Contacts</h3>
                <a href="tel:+17068022373">+1 706 802 2373</a> <br/>
                <a href="mailto:info@adc-web.com"> info@adc-web.com</a>
            </div>
            
        </footer>
    )
}
export default Footer;