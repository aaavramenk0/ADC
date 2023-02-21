import { services } from '../data/services'
import './Services.css'
import webDesignIcon from '../images/HomePage/services/web-design-icon.svg'
import webDevIcon from '../images/HomePage/services/web-dev-icon.svg'
import webAdaptationIcon from '../images/HomePage/services/web-adaptation-icon.svg'
import seoOptimizationIcon from '../images/HomePage/services/seo-icon.svg'

const Services = () => {    
    return (
        <>
            <h2 className="services__heading">What can we do</h2>
            <section className='services' id='services'>
                <div className='service'>
                    <h3 className='service__heading'>{services[0].name}</h3>
                    <img src={webDesignIcon} alt="" className='service__icon' />
                    <p className='service__description'>{services[0].description}</p>
                </div>
                <div className='service'>
                    <h3 className='service__heading'>{services[1].name}</h3>
                    <img src={webDevIcon} alt="" className='service__icon' />
                    <p className='service__description'>{services[1].description}</p>
                </div>
                <div className='service'>
                    <h3 className='service__heading'>{services[2].name}</h3>
                    <img src={webAdaptationIcon} alt="" className='service__icon' />
                    <p className='service__description'>{services[2].description}</p>
                </div>
                <div className='service'>
                    <h3 className='service__heading'>{services[3].name}</h3>
                    <img src={seoOptimizationIcon} alt="" className='service__icon' />
                    <p className='service__description'>{services[3].description}</p>
                </div>
            </section>
        </>
    )
}

export default Services;