---
theme: default
class:
  - lead
  - invert
marp: true
--- 

# _useReducer Hook_
###### presentation by: **Bakri Hmouda**

---

# what is useReducer
The **useReducer** hookHook is similar to the useState Hook.
It allows for custom state logic.
-

> If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

---

**useReducer** is usually preferable to **useState** when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
-
**useReducer** also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
-



---

# how to use **useReducer**
```js
const [state, dispatch] = useReducer(reducer, initialState);
```
> **userReducer** return the state and a dispatch method
and take a reducer function and an initial state

> it is preferred to use an object as the initial state
---

# Invoking state change 



```js
dispatch({type: 'decrement'})
```
---

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

---

# Bailing out of a dispatch
If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. **(React uses the `Object.is` comparison algorithm.)**
-

---

# useReducer vs REDUX

* First, there is no native feature (yet) which combines all reducers to one ultimate reducer. Redux is offering this feature, but in plain React we would have to implement it ourselves.

* Second, every useReducer comes with its own dispatch function. There is no native feature (yet) which combines all dispatch functions to one dispatch function. Redux provides one dispatch function that consumes any action dedicated for any reducer function.

*  While Redux creates one global state container -- which hangs somewhere above your whole application,  useReducer creates a independent component co-located state container.
