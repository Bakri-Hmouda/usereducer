import { createContext, useReducer } from "react";
import Button from "./components/Button"

const initialState = { count: 0, user: 'null' }
export const context = createContext();

function reducer(state, action) {

  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 }
    case 'decrement': return { ...state, count: state.count - 1 }
    case 'addUser': return { ...state, user: 'new user' }

    default: return { count: 0 }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
      <context.Provider value={{ dispatch, state }}>

        <h1>{state.count}</h1>

        <button onClick={() => dispatch({ type: 'increment' })} >increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })} >decrement</button>
        <button onClick={() => dispatch({ type: 'addUser' })}>add new user</button>
        <button onClick={() => dispatch({ type: 'default' })}> reset</button>
        <h1>{state.user}</h1>
        {/* <Button /> */}
      </context.Provider>
    </>
  );
}

export default App;
