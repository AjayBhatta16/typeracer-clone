import React from 'react'

function getTextForTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    seconds %= 60
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export default function Timer(props) {
    return (
        <div className="col-6" id="timer">
            <h3>{getTextForTime(props.time)}</h3>
        </div>
    )
}