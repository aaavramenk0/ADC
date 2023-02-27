import logo from '../images/HomePage/about-us-logo.svg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section id='about-us' className="about-us">
            <fieldset className="about-us__container">
                <img src={logo} alt="Logo of Avramenko Development company" className="about-us__logo"/>
                <div className="about-us__content" >
                    <p>
                        We are a website development <br/> company that helps small and <br/> medium-sized businesses establish <br/> a STRONG ONLINE PRESENCE.
                    </p>
                    <p>
                        Our team comprises experienced <br/> developers and designers dedicated <br/> to delivering high-quality, user-friendly <br/> websites that DRIVE RESULTS.
                    </p>
                </div>
            </fieldset>
        </section>
    )
}

export default AboutUs;