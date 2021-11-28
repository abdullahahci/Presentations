import {createContext, useState} from 'react';

export const ThemeContext = createContext();

// Context to keep theme info
const Theme = ({children}) => {
    const [theme, setTheme] = useState(true);

    const toggleTheme = () => {
        setTheme(!theme);
    }

    return ( 
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider> 
    );
}
 
export default Theme;
