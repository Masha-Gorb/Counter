import React, {useState, useReducer} from 'react';
import {UniversalButton} from "./UniversalButton";
import './App.css';
import './Counter.css';
import {stateReducer, stateReducerAC, stateReducerResetAC, stateReducerSetMinValueAC} from "./store/state-reducer";

export const Counter = () => {
  //один стейт - один редьюсер
  let [minValue, setMinValue] = useState()
  let [maxValue, setMaxValue] = useState()
  let [state, stateDispatch] = useReducer(stateReducer, 0)
  let [error, setError] = useState<string | null>(null)
  let [errorValue, setErrorValue] = useState<string | null>(null)
  let [disableValue, setDisableValue] = useState(false)
  let [disableValueOnSetButton, setDisableValueOnSetButton] = useState(false)


  const onChangeMinHandler = (e: any) => {
    setMinValue(Number(e.target.value))
  }
  const onChangeMaxHandler = (e: any) => {
    setMaxValue(Number(e.target.value))
  }


  const increaseState = () => {
    stateDispatch(stateReducerAC(0, 0))
  }
  const onClickIncHandler = () => {
    if (state + 1 < maxValue) {
      increaseState()
    } else {
      setDisableValue(true)
      stateDispatch(stateReducerAC(0, maxValue))
      setError('все! ты съел свой максимум!')
    }

  }

  const onClickResetHandler = () => {
    stateDispatch(stateReducerResetAC())
    setDisableValue(false)
    setError('')
    setMaxValue(0)
    setMinValue(0)
    setErrorValue('')
    setDisableValueOnSetButton(false)
  }

  const onClickSetHandler = () => {
    let minValueVar = minValue
    let maxValueVar = maxValue
    if (minValueVar >= maxValueVar) {
      setErrorValue('считай шашлык! максимальное количество должно быть больше чем минимальное')
      setMaxValue(0)
      setMinValue(0)
    } else {
      stateDispatch(stateReducerAC(maxValueVar, minValueVar))
      stateDispatch(stateReducerSetMinValueAC(minValueVar))
      setMaxValue(maxValueVar)
      setDisableValueOnSetButton(true)
      setErrorValue('')
    }
  }

  return (
    <div>
      <div className="displayContainer">
        <h1>Счетчик кусочков шашлыка 🍖</h1>
        <div className="display">
          <div>{state}</div>
        </div>
        {error && <div className='error-message'>{error}</div>}

        <div className="buttonsContainer">
          <UniversalButton
            title='ЕЩЕ!'
            callback={onClickIncHandler}
            disabled={disableValue}
          />
          <UniversalButton
            title='Начать заново'
            callback={onClickResetHandler}
            disabled={false}/>
        </div>
      </div>


      <div className="settingsContainer">
        <span className="instruction">Сперва выстави настройки по кусочкам шашлыка, а потом жмякай еще!</span>
        <span>максимум кусков шашлыка сколько я могу съесть</span>
        <input type="number" min="0" max="100" value={maxValue} onChange={onChangeMaxHandler}/>
        <span>сколько кусочков шашлыка я уже съел :)</span>
        <input type="number" min="0" max="100" value={minValue} onChange={onChangeMinHandler}/>
        {errorValue && <div className='error-message'>{errorValue}</div>}
        <UniversalButton title="Настроить" callback={onClickSetHandler} disabled={disableValueOnSetButton}/>
      </div>

    </div>
  )
}