import {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// One way to get context is using static class field
// Can be subscribed to only a single context with this
class BookList extends Component {
    // Set the context with static variable
    static contextType = ThemeContext;

    render() { 
        // Get the context that defined above with static field 
        const {isLight} = this.context;
        let theme = isLight ? 'light' : 'dark';
        return ( 
            <div className={"book-list " + theme}>
                <ul>
                    <li>The Lord of the Rings</li>
                    <li>The Song of Ice and Fire</li>
                    <li>Harry Potter</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;