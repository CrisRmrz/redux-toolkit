
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice';

function App() {

    const { counter } = useSelector((state) => state.counter); //Tomar estados del store
    const dispatch = useDispatch();

    return (
        <>
            <h1> {counter} </h1>
            <button onClick={ () => dispatch( increment() ) } >Increment</button>
            <button onClick={ () => dispatch( decrement() ) } >Decrement</button>
            <button onClick={ () => dispatch( incrementBy(2) ) } >Increment By 2</button>
        </>
    )
}

export default App
