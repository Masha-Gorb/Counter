import React from 'react';

type QuestionOneType = {
    title: string
    incrementFirstOption: () => void
    incrementSecondOption: () => void
}


export const QuestionOne = (props: QuestionOneType) => {
    return <div>
    <h3>{props.title}</h3>
        <button onClick={props.incrementFirstOption}>My answer yes</button>
        <button>My answer no</button>
    </div>
}