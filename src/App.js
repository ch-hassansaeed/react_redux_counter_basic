
import { useSelector,useDispatch } from "react-redux"
import {increment,incrementSteps,decrement,signin} from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch=useDispatch();

  return (
    <div className="App">
hello world
the value of counter is : {counter}
{isLogged?<h3>i am login</h3>:<h6>i am logout</h6>}
<button onClick={()=>dispatch(increment())}>counter +</button>
<button onClick={()=>dispatch(incrementSteps(5))}>counter by step 5</button>
<button onClick={()=>dispatch(decrement())}>counter -</button>
<button onClick={()=>dispatch(signin())}>signin/signout</button>
    </div>
  );
}

export default App;
