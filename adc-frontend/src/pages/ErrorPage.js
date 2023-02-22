import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <>
            <h1 className='error-page-heading'>404 Error! <br /> This page doesn't exist.</h1>
            <div className='error-page-btn'>
                <Link to='/' onClick={(e) => {e.reload();}}>Return to the Home page</Link>
            </div>
        </>
    )
} 

export default ErrorPage;