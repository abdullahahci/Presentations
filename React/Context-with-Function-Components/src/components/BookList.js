import { useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const {theme} = useContext(ThemeContext)
    let appTheme = theme ? 'light' : 'dark';
    return ( 
        <div className={"book-list " + appTheme}>
            <ul>
                <li>The Lord of the Rings</li>
                <li>The Song of Ice and Fire</li>
                <li>Harry Potter</li>
            </ul>
        </div>
     );
}
 
export default BookList;