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
    let [errorValue, setErrorValue] = useState<string | null>(null)
    let [disableValue, setDisableValue] = useState(false)
    let [disableValueonSetButton, setDisableValueonSetButton] = useState(false)


    const onChangeMinHandler = (e: any) => {
        setMinValue(Number(e.target.value))
    }
    const onChangeMaxHandler = (e: any) => {
        setMaxValue(Number(e.target.value))
    }

    const onClickIncHandler = () => {
        if (state + 1 < maxValue) {
            setState(state + 1)
        } else {
            setDisableValue(true)
            setState(maxValue)
            console.log(maxValue)
            setError('max value is reached')
        }
    }

    const onClickResetHandler = () => {
        setState(0)
        setDisableValue(false)
        setError('')
        setMaxValue(0)
        setMinValue(0)
        setErrorValue('')
        setDisableValueonSetButton(false)
    }

    const onClickSetHandler = () => {
            let minValueVar = minValue
            let maxValueVar = maxValue
        if (minValueVar >= maxValueVar) {
            setErrorValue('max value should be bigger than min value')
        } else {
            setState(minValueVar)
            setMaxValue(maxValueVar)
            setDisableValueonSetButton(true)
        }
    }

    return (
        <div className={s.all}>
            <div className={s.displayModule}>
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


            <div className={s.settingsModule}>
                <span>Max value</span>
                <input type="number" min="0" max="100" value={maxValue} onChange={onChangeMaxHandler} />
                <span>Min value</span>
                <input type="number" min="0" max="100" value={minValue} onChange={onChangeMinHandler} />
                {errorValue && <div className='error-message'>{errorValue}</div>}
                <UniversalButton title="Set" callback={onClickSetHandler} disabled={disableValueonSetButton}/>
            </div>

        </div>
    )
}