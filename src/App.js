import { createContext, useReducer } from "react";
import Button from "./components/Button"

const initialState = { count: 0, user: null } // initialState for the useReducer hook
export const context = createContext(); // export the context hook to use in the consumer

// reducer hook for the useReducer hook
function reducer(state, action) {

  switch (action.type) {
    case 'increment': return { ...state, count: state.count + 1 }
    case 'decrement': return { ...state, count: state.count - 1 }
    case 'addUser': return { ...state, user: 'new user' }

    default: return { count: 0 }
  }
}

function App() {

  const [state, dispatchCount] = useReducer(reducer, initialState)


  return (
    <>
      <context.Provider value={{ dispatch: dispatchCount, state }}>

        <h1>{state.count}</h1>

        <button onClick={() => dispatchCount({ type: 'increment', payload: 'hey' })} >increment</button>
        <button onClick={() => dispatchCount({ type: 'decrement' })} >decrement</button>
        <button onClick={() => dispatchCount({ type: 'addUser' })}>add new user</button>
        <button onClick={() => dispatchCount({ type: 'default' })}> reset</button>
        <h1>{state.user}</h1>
        <Button />
      </context.Provider>
    </>
  );
}

export default App;
