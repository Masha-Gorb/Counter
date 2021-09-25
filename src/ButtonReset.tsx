import React from 'react';
import s from './Button.module.css'

type PropsType = {
    title: string
    numbers: number
    reset: () => void
}


export const ButtonReset = (props: PropsType) => {

    return (
        <div className={s.buttonReset}>
            <button onClick={() => props.reset()}>{props.title}</button>
        </div>

    )
}