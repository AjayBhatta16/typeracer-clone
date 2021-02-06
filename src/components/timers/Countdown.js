import React from 'react'

export default function Countdown(props) {
    return (
        <div className="col-6" id="start">
            <h3>{props.isTyping ? 'Start' : `0:0${props.time}`}</h3>
        </div>
    )
}