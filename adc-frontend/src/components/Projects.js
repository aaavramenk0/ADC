import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projects__heading">Our projects</h2>
            <div>
                {projects.map((project) => {
                    const {id, heading, desktopUrl, tabletUrl, topPhoneUrl, bottomPhoneUrl } = project;
                    return (
                        <div key={id}>
                            <h3 className='project__heading'>{heading}</h3>
                            <div className='project-photos'>
                                <img src={desktopUrl} alt="" />
                                <img src={tabletUrl} alt="" />
                                <img src={topPhoneUrl} alt="" />
                                <img src={bottomPhoneUrl} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;