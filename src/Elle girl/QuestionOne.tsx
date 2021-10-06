import React from 'react';

type QuestionOneType = {
    title: string
    incrementFirstOption: () => void
    incrementSecondOption: () => void
}


export const QuestionOne = (props: QuestionOneType) => {
    return <div>
    <h3>{props.title}</h3>
        <button onClick={props.incrementFirstOption} disabled={false}>My answer yes</button>
        <button onClick={props.incrementSecondOption} disabled={false}>My answer no</button>
    </div>
}