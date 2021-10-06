import React, {useState} from 'react';
import './App.css';
import s from './Screen.module.css'
import {ButtonInc} from "./ButtonInc";
import {ButtonReset} from "./ButtonReset";
import { QuestionOne } from './Elle girl/QuestionOne';
import { ResultButton } from './Elle girl/ResultButton';
import { ReloadButton } from './Elle girl/ReloadButton';

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

    let firstOption = 0;
    const incrementFirstOption = () => {
        firstOption++
    }

    let secondOption = 0;
    const incrementSecondOption = () => {
        secondOption++
    }

    const showRes = () => {
        if (firstOption > secondOption) {
            alert ('you are Pupsik')
        } else {
            alert ('i dont know you')
        }
        //window.location.reload();

        document.getElementById("hui")!.setAttribute("disabled", "true");
    }

    return (
        <div className="App">


                {/*<div className={s.screen}>{numbers}</div>*/}

                {/*<ButtonInc*/}
                {/*    title='inc'*/}
                {/*    increment={increment}*/}
                {/*    numbers={numbers}*/}
                {/*/>*/}

                {/*<ButtonReset*/}
                {/*    title='reset'*/}
                {/*    reset={reset}*/}
                {/*    numbers={numbers}*/}
                {/*/>*/}

            <div>
                <h1>Greatest test ever</h1>
                <QuestionOne
                    title='Do you like cookies?'
                    incrementFirstOption={incrementFirstOption}
                    incrementSecondOption={incrementSecondOption}
                />
                <QuestionOne
                    title='Do you like stand up?'
                    incrementFirstOption={incrementFirstOption}
                    incrementSecondOption={incrementSecondOption}
                />
                <QuestionOne
                    title='Can you drive a car?'
                    incrementFirstOption={incrementFirstOption}
                    incrementSecondOption={incrementSecondOption}
                />
                <ResultButton
                showRes={showRes}
                />
                {/*<ReloadButton/>*/}
            </div>



        </div>
    );
}

export default App;
