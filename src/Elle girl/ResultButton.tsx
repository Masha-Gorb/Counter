import React from 'react';

export type ResButtonType = {
    showRes: () => void
    reloadPage: () => void
}

export const ResultButton = (props: ResButtonType) => {
    return <div>
        <button onClick={props.showRes} onKeyPress={props.reloadPage}>See your result</button>
    </div>
}