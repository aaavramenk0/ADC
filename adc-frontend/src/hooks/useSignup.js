import { useState } from "react";
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // save the user info to the localStorage
            localStorage.setItem('user', JSON.stringify(json));

            // update the AuthContext
            dispatch({ type: 'LOGIN', payload: json });
                        
            // update loading state
            setIsLoading(false);

            // redirect user to the homepage
            window.location.href = '/'
        }
    }

    return { signup, isLoading, error }
}

