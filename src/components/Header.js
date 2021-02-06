import React from 'react' 
import Countdown from './timers/Countdown'
import Timer from './timers/Timer'

export default function Header(props) {
    return (
        <div className="jumbotron-fluid bg-dark text-center text-light p-3">
            <div className="row">
                <Countdown isTyping={props.isTyping} time={props.countdown}/>
                <Timer time={props.time}/>
            </div>
        </div>
    )
}
