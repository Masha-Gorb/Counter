import React from 'react';
import './UniversalButton.css';


type PropsType = {
    title: string
    callback: () => void
    disabled: boolean
}


export const UniversalButton = (props: PropsType) => {
    return (
        <div>
            <button className="button" disabled={props.disabled} onClick={props.callback}>{props.title}</button>
        </div>
    )
}