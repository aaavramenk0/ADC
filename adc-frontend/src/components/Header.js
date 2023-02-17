import './Header.css';
// using of Framer motion library for the animations : https://www.framer.com/motion/
import { motion } from "framer-motion"

const Header = () => {
    return (
        <header className='header'>
            <h1 className='company-name'>
                <motion.span>Avramenko</motion.span>
                <br/>
                <motion.span>Development</motion.span>
                <br />
                <motion.span>Company</motion.span>
            </h1>
            <h2 className='company-slogan'>Build your successful <br/> online presence with us!</h2>
            
            <a href="#apply" className="apply-btn">Apply now</a>
        </header>
    )
}

export default Header;
