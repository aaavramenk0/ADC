import './Header.css'

const Header = () => {
    return (
        <header className='header'>
                <h1 className='company-name'>Avramenko <br/> Development <br/> Company</h1>
                <h2 className='company-slogan'>Build your successful <br/> online presence with us!</h2>
                <a href="#apply" className="apply-btn">Apply now</a>
        </header>
    )
}

export default Header;
