import { useState } from 'react';
import { useSignup } from "../hooks/useSignup"
import './Signup.css'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
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

                    <button disabled={isLoading}>Sign up</button>    
                </div>
                {error && <div className='error'>{error}</div>}
            </form>
        </>
    );
}

export default Signup;