import {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);

    let appTheme = theme ? 'light' : 'dark';
    let buttonTheme = theme ? 'dark' : 'light';

    return ( 
        <nav className={appTheme}>
            <div className="button-area">
                <button className={"btn btn-"+buttonTheme} onClick={toggleAuth}>Toggle Auth</button>
                <button className={"btn btn-"+buttonTheme} onClick={toggleTheme}>Toggle Theme</button>
            </div>
            <h1 className="title">Context App {isAuthenticated ? 'User' : 'Guest' }</h1>
            
            <ul>
                {isAuthenticated && <li>Home</li>}
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav> 
    );
}
 
export default Navbar;