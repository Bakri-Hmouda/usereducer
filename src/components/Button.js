import React, { useContext } from 'react'
import { context } from '../App'

function Button() {
    const { dispatch, state } = useContext(context)


    return (
        <>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'increment' })}>subbutton</button>
        </>
    )
}

export default Button
