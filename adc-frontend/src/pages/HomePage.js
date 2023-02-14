import './HomePage.css';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import HowWeDoIt from '../components/HowWeDoIt';


const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <AboutUs />   
                <Services /> 
                <HowWeDoIt />            
            </main>
        </>
    )
}

export default HomePage;