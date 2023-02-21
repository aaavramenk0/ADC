import './Header.css';
import headerPhoto from '../images/HomePage/bg.jpg'
// using of Framer motion library for the animations : https://www.framer.com/motion/

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1 className='company-name'> Avramenko <br /> Development <br /> Company </h1>
                <h2 className='company-slogan'>Build your successful <br/> online presence with us!</h2>
                
                <a href="#apply" className="apply-btn">Apply now</a>    
            </div>
            <img src={headerPhoto} alt="Hands using laptop with virtual screen" />
        </header>
    )
}

export default Header;
