import './HomePage.css';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import HowWeDoIt from '../components/HowWeDoIt';
import Form from '../components/Form';
import Projects from '../components/Projects';
import Quote from '../components/Quote';


const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <AboutUs />   
                <Services /> 
                <HowWeDoIt />  
                {/* <Form /> */}
                <Projects />
                <Quote />
                <Form />
            </main>
        </>
    )
}

export default HomePage;