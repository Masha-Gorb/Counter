import React, {useState} from 'react';
import './App.css';
import s from './Screen.module.css'
import {ButtonInc} from "./ButtonInc";
import {ButtonReset} from "./ButtonReset";
import { QuestionOne } from './Elle girl/QuestionOne';
import { ResultButton } from './Elle girl/ResultButton';
import { ReloadButton } from './Elle girl/ReloadButton';
import { Game } from './MortalKombat/MK';

function App() {
    let [numbers, setNumbers] = useState(0)

    const incHandler = () => {
       setNumbers(numbers + 1)
    }

    const resetHandler = () => {
        setNumbers(0)
    }

    const setToLocalStorageHandler = () => {
        sessionStorage.setItem('counterNumber', JSON.stringify(numbers))
    }
    const getFromLocalStorageHandler = () => {
        let numbersAsString = sessionStorage.getItem('counterNumber')
        if (numbersAsString) {
            let newNumbers = JSON.parse(numbersAsString)
            setNumbers(newNumbers)
        }
    }

    // let data = [
    //     {id: 1, title: 'Do you like cookies?', buttonOneTitle: 'Yes, can eat a lot', buttonTwoTitle: 'prefer cabbage'},
    //     {id: 2, title: 'Can you drive car?', buttonOneTitle: 'yep', buttonTwoTitle: 'no'},
    //     {id: 3, title: 'Do you run fast?', buttonOneTitle: 'can say so', buttonTwoTitle: 'hate running'},
    //     {id: 4, title: 'Do you sleep well?', buttonOneTitle: 'sleep is not for me', buttonTwoTitle: 'very well'},
    //     {id: 5, title: 'Pelevin is your favorite autor?', buttonOneTitle: 'i have read all his books', buttonTwoTitle: 'definitly not'}
    // ]
    //
    // let firstOption = 0;
    // const incrementFirstOption = () => {
    //     firstOption++
    //     document.getElementById("one")!.setAttribute("disabled", "true");
    // }
    //
    // let secondOption = 0;
    // const incrementSecondOption = () => {
    //     secondOption++
    //     document.getElementById("one")!.setAttribute("disabled", "true");
    // }
    //
    // const showRes = () => {
    //     if (firstOption > secondOption) {
    //         alert ('you are Pupsik')
    //     } else {
    //         alert ('i dont know you')
    //     }
    // }
    //
    // const reloadPage = () => {
    //     window.location.reload(false);
    //

    return (
        <div className="App">

            <div className={s.screen}>{numbers}</div>
            <button onClick={incHandler} >inc</button>
            <button onClick={resetHandler} >reset</button>
            <button onClick={setToLocalStorageHandler} >setToLocalStorage</button>
            <button onClick={getFromLocalStorageHandler} >getFromLocalStorage</button>

        </div>

    );
}

export default App;
