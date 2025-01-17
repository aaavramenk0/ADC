import './Projects.css';
import { projects } from '../data/projects';
import schoolDesktop from '../images/HomePage/projects/school/school-desktop.jpg'
import schoolTablet from '../images/HomePage/projects/school/school-tablet.jpg'
import schoolPhones from '../images/HomePage/projects/school/school-phones.jpg'
import houseDesktop from '../images/HomePage/projects/house/house-desktop.webp'
import houseTablet from '../images/HomePage/projects/house/house-tablet.webp'
import housePhones from '../images/HomePage/projects/house/house-phones.webp'
import restaurantDesktop from '../images/HomePage/projects/restaurant/restaurant-desktop.webp'
import restaurantTablet from '../images/HomePage/projects/restaurant/restaurant-tablet.webp'
import restaurantPhones from '../images/HomePage/projects/restaurant/restaurant-phones.webp';



const Projects = () => {
    return (    
        <div>
        <section id="projects" className='projects'>
            <h2 className="projects__heading">Our projects</h2>
            <div className="projects__div">
                <div className='project'>
                    <h3 className='project__heading'>{projects[0].heading}</h3>
                    <div className='project-photos school'>
                        <img className='desktop' src={schoolDesktop} alt={`${projects[0].heading} desktop`} />
                        <img src={schoolPhones} alt={`${projects[0].heading} phones`} className='phones' />
                        <img className='tablet' src={schoolTablet} alt={`${projects[0].heading} tablet`} />
                    </div>
                    <div className='project__description'>
                        <p>
                            <span>Duration of work: </span>4 weeks <br /><span>Team: </span>web designer, web developer and project manager
                        </p>
                        <p>
                            The purpose of a private courses website is to offer a  convenient and flexible way for individuals to learn English language.
                        </p>
                    </div>
                </div>
                <div className='project'>
                    <h3 className='project__heading'>{projects[1].heading}</h3>
                    <div className='project-photos'>
                        <img className='desktop' src={houseDesktop} alt={`${projects[1].heading} desktop`} />
                        <img src={housePhones} alt={`${projects[1].heading} phones`} className='phones' />
                        <img className='tablet' src={houseTablet} alt={`${projects[1].heading} tablet`} />
                    </div>
                    <div className='project__description'>
                        <p>
                            <span>Duration of work: </span>5 weeks <br /><span>Team:</span> web designer, web developer and project manager
                        </p>
                        <p>
                            The purpose of a residential complex website is to provide essential information to help prospective residents make informed decisions about renting or buying a property
                        </p>
                    </div>
                </div>
                <div className='project'>
                    <h3 className='project__heading'>{projects[2].heading}</h3>
                    <div className='project-photos'>
                        <img className='desktop' src={restaurantDesktop} alt={`${projects[2].heading} desktop`} />
                        <img src={restaurantPhones} alt={`${projects[2].heading} phones`} className='phones' />
                        <img className='tablet' src={restaurantTablet} alt={`${projects[2].heading} tablet`} />
                    </div>
                    <div className='project__description'>
                        <p>
                            <span>Duration of work: </span>5 weeks <br /><span>Team: </span>web designer, web developer and project manager
                        </p>
                        <p>
                            The purposes of a website are to attract customers, provide information and create positive experience that encourages customers to dine in or order food for delivery or takeout.
                        </p>
                    </div>
                </div>
            </div>
            <a href="#apply" className="projects-btn">Get a website now</a>
        </section>
        </div>
    )
}

export default Projects;