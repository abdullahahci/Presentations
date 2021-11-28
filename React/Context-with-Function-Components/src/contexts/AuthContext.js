import {createContext, useState} from 'react';

export const AuthContext = createContext();

// Context to keep Auth info
const Auth = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated);
    }

    return ( 
        <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default Auth;

