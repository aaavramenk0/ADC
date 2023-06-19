import { useAuthContext } from '../hooks/useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from localStorage
        localStorage.removeItem('user')

        // dispatch logout action 
        dispatch({ type: 'LOGOUT' })

        // redirect user to the homepage
        window.location.href = '/'
    }

    return {logout}
}