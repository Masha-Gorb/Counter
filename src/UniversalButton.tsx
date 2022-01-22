import React from 'react';

type PropsType = {
    title: string
    callback: () => void
}


export const UniversalButton = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.callback}>{props.title}</button>
        </div>
    )
}