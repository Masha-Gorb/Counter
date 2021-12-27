import React from 'react';
// import s from './Button.module.css'


type PropsType = {
    title: string
    increment: (numbers: number) => void
    numbers: number
}


export const ButtonInc = (props: PropsType) => {

    return (
        <div>
            <button onClick={() => props.increment(props.numbers)}>{props.title}</button>
        </div>
    )
}