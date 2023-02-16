import './Form.css';

const Form = () => {
    return (
        <section className="form__section">
            <h2 className="form__heading">Want a website for your bussiness?</h2>
            <h3 className="form__subheading">Apply now and get a <span>free</span> brief interview with our experienced designer!</h3>
            <div className="form__card">
                <form>
                    <label for="name">Your name</label>
                    <input type="text" id="name" name="name" placeholder="Jack Snow" className="form__input" required />
                    
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="example@gmail.com" className="form__input" required/>
                    
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 770 802 5995" className="form__input" required />
                    
                    <div id="checkboxes" className="form__checkboxes">
                        <label>Ways to comunicate: </label>
                        <input type="checkbox" id="phone__checkbox" name="phone__checkbox"/><label for="phone__checkbox">Phone</label>
                        <input type="checkbox" id="email__checkbox" name="email__checkbox"/><label for="email__checkbox">Email</label>
                        <input type="checkbox" id="<messenger__checkbox" name="messenger__checkbox"/><label for="messenger__checkbox">Messenger</label>
                    </div>
                </form>    
            </div>
            <div className="form__card">
                <form>
                    <label for="bus-industry">Bussiness industry</label>
                    <input type="text" id="bus-industry" name="bus-industry" placeholder="Sales, tourism, restaurant, etc." className="form__input" required />
                    
                    <label for="company-name">Company name</label>
                    <input type="text" id="company-name" name="company-name" placeholder="Avramenko Development Company" className="form__input" required/>
                    
                    <label for="what-is-selling">What do you sell?</label>
                    <input type="text" id="what-is-selling" name="what-is-selling" placeholder="Name of the products or services" className="form__input" required />
                </form>
            </div>
            <div className="form__card">
            <form>
                    <label for="deadline">How fast would you like to get a ready website?</label>
                    <div>
                        <label>No deadline</label>
                        <input type="range" id="deadline" name="deadline" min="1" max="5" className="form__input" value="3" required />
                        <label>ASAP</label>
                    </div>
                    
                    <label for="price">How much are you ready to pay for your website?</label>
                    <input type="number" id="price" name="price" placeholder="$1500" className="form__input" required/>
                </form>
            </div>
            <a href="#apply" className="form-btn">Apply now</a>
        </section>
    )
}

export default Form;