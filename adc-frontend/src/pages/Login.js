import { useState } from 'react';
import './Login.css'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, password)
    }
    
    return (
        <>
            <form className='login' onSubmit={handleSubmit}>
                <h3>Log in</h3>

                <div className='form-wrapper'>
                    <div className='email-field-div'>
                       <label>Email </label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        /> 
                    </div>
                    
                    <div className='password-field-div'>
                        <label className='password-label'>Password</label>
                        
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        
                    </div>
        
                    

                    <button>Log in</button>
                </div>
                
            </form>
        </>
    );
}

export default Login;