import logo from '../images/HomePage/logo.svg'
import aboutUsImg from '../images/HomePage/about-us.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className='about-us' id='about-us'>
            <div className='about-us__left-side'>
                <img src={logo} alt="" className='about-us__logo'/>
                <div className='about-us__content'>
                    <p>We are a website development <br/> company that helps small and <br/> medium-sized businesses establish <br/> a STRONG ONLINE PRESENCE.</p>
                    <p>Our team comprises experienced <br/> developers and designers dedicated <br/> to delivering high-quality, user-friendly <br/> websites that DRIVE RESULTS.</p>
                </div>
            </div>
            <div className='about-us__right-side'>
                <img src={aboutUsImg} alt="" /> 
                {/*<span className='about-us-img__border-first'></span>
                <span className='about-us-img__border-second'></span>*/}
            </div>
        </section>
    )
}

export default AboutUs;