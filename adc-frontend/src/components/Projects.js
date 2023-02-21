import './Projects.css';
import { projects } from '../data/projects';
import schoolDesktop from '../images/HomePage/projects/school/school-desktop.jpg'
import schoolTablet from '../images/HomePage/projects/school/school-tablet.jpg'
import schoolTopPhone from '../images/HomePage/projects/school/school-phone-top.jpg'
import schoolBottomPhone from '../images/HomePage/projects/school/school-phone-bottom.jpg'
import houseDesktop from '../images/HomePage/projects/house/house-desktop.jpg'
import houseTablet from '../images/HomePage/projects/house/house-tablet.jpg'
import houseTopPhone from '../images/HomePage/projects/house/house-top-phone.jpg'
import houseBottomPhone from '../images/HomePage/projects/house/house-bottom-phone.jpg'
import restaurantDesktop from '../images/HomePage/projects/restaurant/restaurant-desktop.jpg'
import restaurantTablet from '../images/HomePage/projects/restaurant/restaurant-tablet.jpg'
import restaurantTopPhone from '../images/HomePage/projects/restaurant/restaurant-top-phone.jpg'
import restaurantBottomPhone from '../images/HomePage/projects/restaurant/restaurant-bottom-phone.jpg'


const Projects = () => {
    return (
        <section id="projects" className='projects'>
            <h2 className="projects__heading">Our projects</h2>
            <div className='project'>
                <h3 className='project__heading'>{projects[0].heading}</h3>
                <div className='project-photos'>
                    <img src={schoolDesktop} alt={`${projects[0].heading} desktop`} />
                    <img src={schoolTablet} alt={`${projects[0].heading} tablet`} />
                    <img src={schoolTopPhone} alt={`${projects[0].heading} phone 1`} className='top-phone' />
                    <img src={schoolBottomPhone} alt={`${projects[0].heading} phone 2`} className='bottom-phone' />
                </div>
                <div className='project__description'>
                    <p>
                        <span>Duration of work: </span>4 weeks <br /><span>Team: </span>web designer, web developer and <br /> project manager
                    </p>
                    <p>
                        The purpose of a private courses website is <br /> to offer a  convenient and flexible way for <br /> individuals to learn English language.
                    </p>
                </div>
            </div>
            <div className='project'>
                <h3 className='project__heading'>{projects[1].heading}</h3>
                <div className='project-photos'>
                    <img src={houseDesktop} alt={`${projects[1].heading} desktop`} />
                    <img src={houseTablet} alt={`${projects[1].heading} tablet`} />
                    <img src={houseBottomPhone} alt={`${projects[1].heading} phone 2`} className='bottom-phone' />
                    <img src={houseTopPhone} alt={`${projects[1].heading} phone 1`} className='top-phone' />
                </div>
                <div className='project__description'>
                    <p>
                        <span>Duration of work: </span>5 weeks <br /><span>Team:</span> web designer, web developer and <br /> project manager
                    </p>
                    <p>
                        The purpose of a residential complex website is to provide <br /> essential information to help prospective residents make <br /> informed decisions about renting or buying a property
                    </p>
                </div>
            </div>
            <div className='project'>
                <h3 className='project__heading'>{projects[2].heading}</h3>
                <div className='project-photos'>
                    <img src={restaurantDesktop} alt={`${projects[2].heading} desktop`} />
                    <img src={restaurantTablet} alt={`${projects[2].heading} tablet`} />
                    <img src={restaurantTopPhone} alt={`${projects[2].heading} phone 1`} className='top-phone' />
                    <img src={restaurantBottomPhone} alt={`${projects[2].heading} phone 2`} className='bottom-phone' />
                </div>
                <div className='project__description'>
                    <p>
                        <span>Duration of work: </span>5 weeks <br /><span>Team: </span>web designer, web developer and <br /> project manager
                    </p>
                    <p>
                        The purposes of a website are to attract customers, provide <br /> information and create positive experience that encourages <br /> customers to dine in or order food for delivery or takeout.
                    </p>
                </div>
            </div>
            <a href="#apply" className="projects-btn">Apply now</a>
        </section>
    )
}

export default Projects;