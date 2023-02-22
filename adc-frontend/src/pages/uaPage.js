import { Link } from 'react-router-dom';
import './uaPage.css'
const UAPage = () => {
    return (
        <div>
            <h1 className='ua-heading'>We are sorry! <br/> Ukrainian version of the website is coming soon...</h1>
            <div className='ua-btn'>
                <Link to='/' onClick={(e) => {e.reload();}}>Return to the Home page</Link>
            </div>
        </div>
    )
} 

export default UAPage;