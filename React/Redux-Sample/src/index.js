import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//STORE -> Globalized state
let store = createStore(
  allReducers,  // create store the combined reducer inside reducers/index.js
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // to use redux dev tools
);
store.subscribe(() => {
  console.log("state changed:")
  console.log(store.getState())
});

// Using provider to encapsulate the root to access the store from all children
ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,
  document.getElementById('root')
);

