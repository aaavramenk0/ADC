import './HomePage.css';
import logo from '../images/HomePage/logo.svg'
import aboutUsImg from '../images/HomePage/about-us.jpg'
import webDesignIcon from '../images/HomePage/services/web-design-icon.svg'
import webDevIcon from '../images/HomePage/services/web-dev-icon.svg'
import webAdaptationIcon from '../images/HomePage/services/web-adaptation-icon.svg'
import seoOptimizationIcon from '../images/HomePage/services/seo-icon.svg'

const HomePage = () => {
    return (
        <>
            <header className='header'>
                <h1 className='company-name'>Avramenko <br/> Development <br/> Company</h1>
                <h2 className='company-slogan'>Build your successful <br/> online presence with us!</h2>
                <a href="#apply" className="apply-btn">Apply now</a>
            </header>

            <main>
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

                <section className='services' id='services'>
                    <div className='service'>
                        <h3 className='service__heading'>WEB DESIGN</h3>
                        <img src={webDesignIcon} alt="" className='service__icon' />
                        <p className='service__description'>Creating visually appealing and user-friendly websites</p>
                    </div>
                    <div className='service'>
                        <h3 className='service__heading'>WEB DEVELOPMENT</h3>
                        <img src={webDevIcon} alt="" className='service__icon' />
                        <p className='service__description'>The process of building, creating and maintaining websites</p>
                    </div>
                    <div className='service'>
                        <h3 className='service__heading'>WEB ADAPTATION</h3>
                        <img src={webAdaptationIcon} alt="" className='service__icon' />
                        <p className='service__description'>Making a website accessible and usable on different devices and platforms</p>
                    </div>
                    <div className='service'>
                        <h3 className='service__heading'>SEO OPTIMIZATION</h3>
                        <img src={seoOptimizationIcon} alt="" className='service__icon' />
                        <p className='service__description'>Improving a websites visibility and ranking in search engines like Google, Bing and others</p>
                    </div>
                </section>
                
            </main>
        </>
    )
}

export default HomePage;