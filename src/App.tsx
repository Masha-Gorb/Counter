import React, {useState} from 'react';
import './App.css';
import s from './Screen.module.css'
import {ButtonInc} from "./ButtonInc";
import {ButtonReset} from "./ButtonReset";

function App() {
    let [numbers, setNumbers] = useState(0)

    const increment = (numbers: number) => {
        let result = numbers+1
        if(result < 6)
            setNumbers(result)
    }

    const reset = () => {
        let result = 0
        setNumbers(result)
    }

    return (
        <div className="App">

                <h1>Greatest counter ever</h1>
                <div className={s.screen}>{numbers}</div>

                <ButtonInc
                    title='inc'
                    increment={increment}
                    numbers={numbers}
                />

                <ButtonReset
                    title='reset'
                    reset={reset}
                    numbers={numbers}
                />

        </div>
    );
}

export default App;
