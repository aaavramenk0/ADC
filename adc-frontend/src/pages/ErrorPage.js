import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css'
const ErrorPage = () => {
    return (
        <>
            <h1 className={`${styles['error-page-heading']}`}>404 Error! <br /> This page doesn't exist.</h1>
            <div className='error-page-btn'>
                <Link to='/'><h2>Return to the Home page</h2></Link>
            </div>
        </>
    )
} 

export default ErrorPage;