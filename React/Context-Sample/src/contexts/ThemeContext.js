import {createContext, Component} from 'react';

export const ThemeContext = createContext();

// Context to keep theme info
class ThemeContextProvider extends Component {
    state = { 
        isLight: true
    }
    toggleTheme = () => {
        this.setState({isLight: !this.state.isLight});
    }
    // To use state of this context, children should be encapsulated with Context.Provider
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;