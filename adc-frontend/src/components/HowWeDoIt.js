import './HowWeDoIt.css'
import { process } from '../data/process';
import searchIcon from '../images/HomePage/process/searchIcon.svg';
import designIcon from '../images/HomePage/process/designIcon.svg';
import devIcon from '../images/HomePage/process/devIcon.svg';
import testIcon from '../images/HomePage/process/testIcon.svg';
import deploymentIcon from '../images/HomePage/process/deploymentIcon.svg'
import maintenanceIcon from '../images/HomePage/process/maintenanceIcon.svg'

const HowWeDoIt = () => {
    return(
        <section id='process' className="process">
            <h2 className="process__heading">How we do it</h2>
            <div className="process__phases" >
                <div className='discovery-phase'>
                    <div className='phase__heading-line'>
                        <span>{process[0].id}</span>
                        <h2>{process[0].phaseName}</h2>
                    </div>
                    <img src={searchIcon} className="left-phase-img" alt="Background icon for the Discovery phase" />
                    <p className='phase-description'>{process[0].phaseDescription}</p>
                </div>
                <div className='design-phase'>
                    <div className='phase__heading-line'>
                        <span>{process[1].id}</span>
                        <h2>{process[1].phaseName}</h2>
                    </div>
                    <img src={designIcon} className="right-phase-img" alt="Background icon for the Design phase" />
                    <p className='phase-description'>{ process[1].phaseDescription}</p>
                </div>
                <div className='dev-phase'>
                    <div className='phase__heading-line'>
                        <span>{process[2].id}</span>
                        <h2>{process[2].phaseName}</h2>
                    </div>
                    <img src={devIcon} className="left-phase-img" alt="Background icon for the Development phase" />
                    <p className='phase-description'>{ process[2].phaseDescription}</p>
                </div>
                <div className='testing-phase'>
                    <div className='phase__heading-line'>
                        <span>{process[3].id}</span>
                        <h2>{process[3].phaseName}</h2>
                    </div>
                    <img src={testIcon} className="right-phase-img" alt="Background icon for the Testing phase" />
                    <p className='phase-description'>{ process[3].phaseDescription}</p>
                </div>
                <div className='deployment-phase'>
                    <div className='phase__heading-line'>
                        <span>{process[4].id}</span>
                        <h2>{process[4].phaseName}</h2>
                    </div>
                    <img src={deploymentIcon} className="left-phase-img" alt="Background icon for the Deployment phase" />
                    <p className='phase-description'>{ process[4].phaseDescription}</p>
                </div>
                <div className='maintenance-phase'>
                    <div className='phase__heading-line'>
                        <span>{process[5].id}</span>
                        <h2>{process[5].phaseName}</h2>
                    </div>
                    <img src={maintenanceIcon} className="right-phase-img" alt="Background icon for the Maintenance phase" />
                    <p className='phase-description'>{ process[5].phaseDescription}</p>
                </div>
            </div>
            <a href="#apply" className="process-btn">Get a website now</a>
        </section>
    )
}

export default HowWeDoIt;