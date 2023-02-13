import './HomePage.css';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import HowWeDoIt from '../components/HowWeDoIt';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <AboutUs />   
                <Services /> 
                <HowWeDoIt />            
            </main>
            <Footer />
        </>
    )
}

export default HomePage;