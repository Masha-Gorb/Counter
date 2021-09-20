import React from 'react';


type PropsType = {
    title: string
    numbers: number
    reset: () => void
}


export const ButtonReset = (props: PropsType) => {

    return (
        <button onClick={() => props.reset()}>{props.title}</button>
    )
}