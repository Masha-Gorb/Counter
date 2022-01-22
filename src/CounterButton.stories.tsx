import React, {useState} from 'react';
import App from "./App";

export default {
    title: 'Counter button story',
    component: App
}

export const CounterButton = () => {
    let [state, setState] = useState(0)

    const onClickIncHandler = () => {
        setState(state+1)
    }
    const onClickResetHandler = () => {
        setState(0)
    }

    return (
        <div>
            <div>{state}</div>
            <button onClick={onClickIncHandler}>inc</button>
            <button onClick={onClickResetHandler}>reset</button>
        </div>
    )
}