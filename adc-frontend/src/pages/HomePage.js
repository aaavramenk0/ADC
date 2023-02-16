import './HomePage.css';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import HowWeDoIt from '../components/HowWeDoIt';
import Form from '../components/Form';


const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <AboutUs />   
                <Services /> 
                <HowWeDoIt />  
                <Form />
                <Form />
            </main>
        </>
    )
}

export default HomePage;