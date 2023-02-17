import { Link } from 'react-router-dom';
import './uaPage.css'
const UAPage = () => {
    return (
        <>
            <h1 className='ua-heading'>We are sorry! <br/> Ukrainian version of the website is coming soon...</h1>
            <div className='ua-btn'>
                <Link to='/'><h2>Return to the Home page</h2></Link>
            </div>
        </>
    )
} 

export default UAPage;