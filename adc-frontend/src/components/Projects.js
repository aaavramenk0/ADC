import './Projects.css';
import { projects } from '../data/projects';
import desktop from '../images/HomePage/projects/school-desktop.jpg'
import tablet from '../images/HomePage/projects/school-tablet.jpg'
import topPhone from '../images/HomePage/projects/school-phone-top.jpg'
import phoneBottom from '../images/HomePage/projects/school-phone-bottom.jpg'

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projects__heading">Our projects</h2>
            <div>
                {projects.map((project) => {
                    const {id, heading} = project;
                    return (
                        <div key={id}>
                            <h3 className='project__heading'>{heading}</h3>
                            <div className='project-photos'>
                                <img src={desktop} alt={`${heading} desktop`} />
                                <img src={tablet} alt={`${heading} tablet`} />
                                <img src={topPhone} alt={`${heading} phone 1`} className='top-phone'/>
                                <img src={phoneBottom} alt={`${heading} phone 2`} className='bottom-phone' />
                            </div>
                            <div className='project__description'>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;