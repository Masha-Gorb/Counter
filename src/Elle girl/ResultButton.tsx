import React from 'react';

export type ResButtonType = {
    showRes: () => void
}

export const ResultButton = (props: ResButtonType) => {
    return <div>
        <button id="hui" onClick={props.showRes}>See your result</button>
    </div>
}