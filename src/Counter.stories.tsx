import React, {useState} from 'react';
import App from "./App";
import {UniversalButton} from "./UniversalButton";
import s from "./Counter.module.css"
export default {
    title: 'Counter story',
    component: App
}

export const Counter = () => {
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [state, setState] = useState(minValue)
    let [error, setError] = useState<string | null>(null)
    let [disableValue, setDisableValue] = useState(false)


    const onChangeMinHandler = (e: any) => {
        setMinValue(e.target.value)
    }
    const onChangeMaxHandler = (e: any) => {
        setMaxValue(e.target.value)
    }

    const onClickIncHandler = () => {
        if (state + 1 < Number(maxValue)) {
            setState(Number(state) + 1)
        } else {
            setDisableValue(true)
            setState(Number(maxValue))
            console.log(Number(maxValue))
            setError('max value is reached')
        }
    }

    const onClickResetHandler = () => {
        setState(0)
        setDisableValue(false)
        setError('')
    }

    const onClickSetHandler = () => {
        setState(Number(minValue))
        setMaxValue(Number(maxValue))
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

            <div>
                <span>Max value</span>
                <input type="number" min="0" max="100" value={maxValue} onChange={onChangeMaxHandler}/>
            </div>

            <div>
                <span>Min value</span>
                <input type="number" min="0" max="100" value={minValue} onChange={onChangeMinHandler}/>
            </div>

            <UniversalButton title="Set" callback={onClickSetHandler} disabled={false}/>
        </div>
    )
}