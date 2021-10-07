import React from 'react';

type DataType = {
    id: number
    title: string
    buttonOneTitle: string
    buttonTwoTitle: string
}

type QuestionOneType = {
    data: Array<DataType>
    incrementFirstOption: () => void
    incrementSecondOption: () => void
}


export const QuestionOne = (props: QuestionOneType) => {
    return <div>
        {props.data.map( q => <li>
            <h3>{q.title}</h3>
            <button id='one' onClick={props.incrementFirstOption}>{q.buttonOneTitle}</button>
            <button id='two' onClick={props.incrementSecondOption}>{q.buttonTwoTitle}</button>
            </li>

        )}
    </div>
}