import React, {useState} from 'react';
import App from "./App";
import {UniversalButton} from "./UniversalButton";
import s from "./Counter.module.css"

export default {
    title: 'Counter story',
    component: App
}

export const Counter = () => {
    let [state, setState] = useState(0)
    let [error, setError] = useState<string | null>(null)
    let [disableValue, setDisableValue] = useState(false)

    const onClickIncHandler = () => {

        if (state+1 < 5) {
            setState(state+1)
        } else {
            setDisableValue(true)
            setState(5)
            setError('max value is reached')
        }
    }


    const onClickResetHandler = () => {
        setState(0)
    }

    return (
        <div>
            <div className={s.display}>{state}</div>
            {error && <div className='error-message'>{error}</div>}

            <UniversalButton
                title='Inc'
                callback={onClickIncHandler}
                disabled={disableValue}
            />
            <UniversalButton
                title='Reset'
                callback={onClickResetHandler}
                disabled={false}/>
        </div>
    )
}