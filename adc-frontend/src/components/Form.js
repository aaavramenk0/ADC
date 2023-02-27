import './Form.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange: (e) => setValue(e.target.value),
        }, () => setValue(initialValue)
    ];
}
const Form = () => {
    const form = useRef();
    const [isFieldFilled, setIsFieldFilled] = useState(false); // useState hook for checking the value in input

    // declaring inputs' values using 'useState' hook
    const [fullName, resetFullName] = useInput('');
    const [email, resetEmail] = useInput('');
    const [phone, resetPhone] = useInput('');
    const [businessIndustry, resetBusinessIndustry] = useInput('');
    const [companyName, resetCompanyName] = useInput('');
    const [sellIndustry, resetSellIndustry] = useInput('');
    const [deadline, resetDeadline] = useInput(3);
    const [price, resetPrice] = useInput('');

    const submit = e => { // function for getting users' inputs from the form and pass them to the backend
        e.preventDefault(); // prevent default reloading of the page after submitting form
        /* console.log(fullName.value, email.value, phone.value, businessIndustry.value, companyName.value, sellIndustry.value, deadline.value, price.value); /* Ouput the user inputs from the form */
        resetFullName(); resetEmail(); resetPhone(); resetBusinessIndustry(); resetCompanyName(); resetSellIndustry(); resetDeadline(); resetPrice(); // reseting all values after submitting form
        setIsFieldFilled(false); // set the value of the price field to false
        emailjs.sendForm('service_gjibnjc', 'template_v5hw2ym', form.current, 'c3wYcruUL-Jeg_u2d')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }

    

    const toggleButton = (event) => { // function to get the event(input) from calling the function
        if (event.target.value.trim().length > 0) { // then if value inside the input is more then 0 ('trim' is to get rid of spaces after the text and before)
            setIsFieldFilled(true); // we set the value of 'isFieldFilled' to 'true'
        } else { // or if the value inside the input is less or equal to 0
            setIsFieldFilled(false); // we set the value of 'isFieldFilled' to 'false'
        }
    }

    

    return (
        <section className="form__section" id="apply">
            <h2 className="form__heading">Want a website for your bussiness?</h2>
            <h3 className="form__subheading">Apply now and get a <span>free</span> brief interview with our experienced designer!</h3>
            <form className="form__cards" ref={form} onSubmit={submit}>
                <div className="form__card first-card" >
                    <label htmlFor="name">Your name *</label>
                    <input
                        type="text"
                        {...fullName}
                        id="name"
                        name="name"
                        placeholder="Jack Snow"
                        className="form__input"
                        required
                    /> 
                    <label htmlFor="email">Email *</label>
                    <input
                        type="email"
                        {...email}
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="form__input"
                        required
                    />
                        
                    <label htmlFor="phone">Phone *</label>
                    <input
                        type="tel"
                        {...phone}
                        id="phone"
                        name="phone"
                        placeholder="+1 770 802 5995"
                        className="form__input"
                        required
                    />
                    <label className="checkboxes__label">Ways to comunicate: *</label>
                    <div id="checkboxes" className="form__checkboxes">
                        <div className="form__checkbox">
                            <input
                                type="checkbox"
                                id="phone__checkbox"
                                name="phone__checkbox"
                            />
                            <label htmlFor="phone__checkbox">Phone</label>
                        </div>
                        <div className="form__checkbox">
                            <input
                                type="checkbox"
                                id="email__checkbox"
                                name="email__checkbox" />
                            <label htmlFor="email__checkbox">Email</label>
                        </div>
                        <div className="form__checkbox">
                            <input
                                type="checkbox"
                                id="messenger__checkbox"
                                name="messenger__checkbox" />
                            <label htmlFor="messenger__checkbox">Messenger</label> 
                        </div>
                        
                    </div>
                </div>    
                <div className="form__card second-card">
                    <label htmlFor="bus_industry">Bussiness industry *</label>
                    <input
                        type="text"
                        {...businessIndustry}
                        id="bus-industry"
                        name="bus_industry"
                        placeholder="Sales, tourism, restaurant, etc."
                        className="form__input"
                        required
                    />
                    
                    <label htmlFor="company_name">Company name *</label>
                    <input
                        type="text"
                        {...companyName}
                        id="company-name"
                        name="company_name"
                        placeholder="Avramenko Development Company"
                        className="form__input"
                        required
                    />
                    
                    <label htmlFor="what_is_selling">What do you sell? *</label>
                    <input
                        type="text"
                        {...sellIndustry}
                        id="what-is-selling"
                        name="what_is_selling"
                        placeholder="Name of the products or services"
                        className="form__input"
                        required />
                </div>
                <div className="form__card third-card">
                    <label htmlFor="deadline">How fast would you like to get a ready website? *</label>
                    <div className="deadline">
                        <label>No deadline</label>
                        <input
                            type="range"
                            {...deadline}
                            id="deadline"
                            name="deadline"
                            min="1"
                            max="10"
                            className="form__input"
                            required />
                        <label>ASAP</label>
                    </div>
                    
                    <label htmlFor="price">How much are you ready to pay for your website? (in USD) *</label>
                    <input
                        type="number"
                        {...price}
                        id="price"
                        name="price"
                        placeholder="1500"
                        step="50"
                        className="form__input"
                        onInput={toggleButton /* on every change inside the input we check the inside value by calling the 'toggleButton' function and using useState hook*/}
                        required
                    />
                </div>
            </form>

            <a href="#apply" onClick={isFieldFilled ? submit : undefined} className='form-btn' style={isFieldFilled ? {'background' : '#4267B2'} : {'cursor' : 'not-allowed'} /*  depending on the value of variable 'isFieldFilled' we dynamically define the styles for the button }*/ }  >Apply now</a>
        </section>
    )
}

export default Form;