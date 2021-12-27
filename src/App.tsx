import React, {useEffect, useState} from 'react';
import './App.css';
import s from './Screen.module.css'
import {ButtonInc} from "./ButtonInc";
import {ButtonReset} from "./ButtonReset";
import { QuestionOne } from './Elle girl/QuestionOne';
import { ResultButton } from './Elle girl/ResultButton';
import { ReloadButton } from './Elle girl/ReloadButton';

function App() {
    let [numbers, setNumbers] = useState(0)

    useEffect( () => {
        let numbersAsString = localStorage.getItem('counterNumber')
        if (numbersAsString) {
            let newNumbers = JSON.parse(numbersAsString)
            setNumbers(newNumbers)
        }
    }, [])

    useEffect( ()=> {
        localStorage.setItem('counterNumber', JSON.stringify(numbers))
    }, [numbers])

    const incHandler = () => {
       setNumbers(numbers + 1)
    }

    const resetHandler = () => {
        setNumbers(0)
    }


    return (
        <div className="App">

            <div className={s.screen}>{numbers}</div>
            <button onClick={incHandler} >inc</button>
            <button onClick={resetHandler} >reset</button>

        </div>

    );
}

export default App;
