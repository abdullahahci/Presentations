import {createContext, Component} from 'react';

export const AuthContext = createContext();

// Context to keep Auth info
class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
    }
    toggleAuth = () => {
        this.setState({isAuthenticated: !this.state.isAuthenticated});
    }
    // To use state of this context, children should be encapsulated with Context.Provider
    render() { 
        return ( 
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}
 
export default AuthContextProvider;
