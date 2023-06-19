import { useState } from 'react';
import './Signup.css'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password)
    }
    
    return (
        <>
            <form className='signup' onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                
                <div className='form-wrapper'>
                    <div className='email-field-div'>
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                
                <div className='password-field-div'>   
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                
                <p className='password-rule'>Password must contain combination of at least 8 symbols: uppercase letters, lowercase letters, numbers, and special symbols.</p>

                <button>Sign up</button>
                
                </div>
            </form>
        </>
    );
}

export default Signup;