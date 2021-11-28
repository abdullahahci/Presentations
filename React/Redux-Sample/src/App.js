import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, logIn, logOut} from './actions'

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Counter: {counter}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <br/>
      {
        isLogged && (
          <>
          <span className="welcome">Hello User</span>
          <button onClick={() => dispatch(logOut())}>Log out</button>
          </>
        )
      }
      {
        !isLogged && (
          <>
          <span className="welcome">Hello Guest, wanna login?</span>
          <button onClick={() => dispatch(logIn())}>Log in</button>
          </>
        )
        
      }
    </div>
  );
}

export default App;
