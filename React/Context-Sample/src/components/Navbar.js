import {Component} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

// To consume multiple contexts consumers need to be a separate node in the tree.
// Order is not important
class Navbar extends Component {
    render() { 
        return (
            // Consume theme context
            <ThemeContext.Consumer>
                {themeContext => (
                //Consume Auth Context
                <AuthContext.Consumer>
                    {authContext => {
                        const {isLight, toggleTheme} = themeContext;
                        const {isAuthenticated, toggleAuth} = authContext
                        let theme = isLight ? 'light' : 'dark';
                        let buttonTheme = isLight ? 'dark' : 'light';
                        return (
                            <nav className={theme}>
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
                        )
                    }}
                </AuthContext.Consumer>
                )}
            </ThemeContext.Consumer>
        );
    }
}
  
export default Navbar;