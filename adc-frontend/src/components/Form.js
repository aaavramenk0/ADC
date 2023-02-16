import './Form.css';

const Form = () => {
    return (
        <section className="form__section" id="apply">
            <h2 className="form__heading">Want a website for your bussiness?</h2>
            <h3 className="form__subheading">Apply now and get a <span>free</span> brief interview with our experienced designer!</h3>
            <div className="form__cards">
                <form className="form__card">
                    <label htmlFor="name">Your name *</label>
                    <input type="text" id="name" name="name" placeholder="Jack Snow" className="form__input" required />
                        
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" className="form__input" required/>
                        
                    <label htmlFor="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 770 802 5995" className="form__input" required />
                        
                    <label className="checkboxes__label">Ways to comunicate: *</label>
                    <div id="checkboxes" className="form__checkboxes">
                        <div className="form__checkbox">
                            <input type="checkbox" id="phone__checkbox" name="phone__checkbox"  />
                            <label htmlFor="phone__checkbox">Phone</label>
                        </div>
                        <div className="form__checkbox">
                            <input type="checkbox" id="email__checkbox" name="email__checkbox" />
                            <label htmlFor="email__checkbox">Email</label>
                        </div>
                        <div className="form__checkbox">
                            <input type="checkbox" id="<messenger__checkbox" name="messenger__checkbox" />
                            <label htmlFor="messenger__checkbox">Messenger</label> 
                        </div>
                        
                    </div>
                </form>    
                <form className="form__card">
                    <label htmlFor="bus-industry">Bussiness industry *</label>
                    <input type="text" id="bus-industry" name="bus-industry" placeholder="Sales, tourism, restaurant, etc." className="form__input" required />
                    
                    <label htmlFor="company-name">Company name *</label>
                    <input type="text" id="company-name" name="company-name" placeholder="Avramenko Development Company" className="form__input" required/>
                    
                    <label htmlFor="what-is-selling">What do you sell? *</label>
                    <input type="text" id="what-is-selling" name="what-is-selling" placeholder="Name of the products or services" className="form__input" required />
                </form>
                <form className="form__card">
                    <label htmlFor="deadline">How fast would you like to get a ready website? *</label>
                    <div className="deadline">
                        <label>No deadline</label>
                        <input type="range" id="deadline" name="deadline" min="1" max="5" className="form__input" required />
                        <label>ASAP</label>
                    </div>
                    
                    <label htmlFor="price">How much are you ready to pay for your website? (in USD) *</label>
                    <input type="number" id="price" name="price" placeholder="1500" step="50" className="form__input" required/>
                </form>
            </div>

            <a href="#apply" className="form-btn">Apply now</a>
        </section>
    )
}

export default Form;