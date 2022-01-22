import React from 'react';

type PropsType = {
    title: string
    callback: () => void
    disabled: boolean
}


export const UniversalButton = (props: PropsType) => {
    return (
        <div>
            <button disabled={props.disabled} onClick={props.callback}>{props.title}</button>
        </div>
    )
}