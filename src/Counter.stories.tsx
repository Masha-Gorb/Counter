import React, {useState} from 'react';
import App from "./App";
import {UniversalButton} from "./UniversalButton";

export default {
    title: 'Counter story',
    component: App
}

export const Counter = () => {
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

            <UniversalButton
                title='Inc'
                callback={onClickIncHandler}/>
            <UniversalButton
                title='Reset'
                callback={onClickResetHandler}/>
        </div>
    )
}