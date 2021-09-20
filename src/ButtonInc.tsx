import React from 'react';


type PropsType = {
    title: string
    increment: (numbers: number) => void
    numbers: number
}


export const ButtonInc = (props: PropsType) => {

    return (
        <button onClick={() => props.increment(props.numbers)}>{props.title}</button>
    )
}