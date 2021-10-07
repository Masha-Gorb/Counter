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


    let data = [
        {id: 1, title: 'Do you like cookies?', buttonOneTitle: 'Yes, can eat a lot', buttonTwoTitle: 'prefer cabbage'},
        {id: 2, title: 'Can you drive car?', buttonOneTitle: 'yep', buttonTwoTitle: 'no'},
        {id: 3, title: 'Do you run fast?', buttonOneTitle: 'can say so', buttonTwoTitle: 'hate running'},
        {id: 4, title: 'Do you sleep well?', buttonOneTitle: 'sleep is not for me', buttonTwoTitle: 'very well'},
        {id: 5, title: 'Pelevin is your favorite autor?', buttonOneTitle: 'i have read all his books', buttonTwoTitle: 'definitly not'}
    ]

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
                    data={data}
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
