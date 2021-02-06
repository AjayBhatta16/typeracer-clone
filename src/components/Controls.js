import React from 'react'

export default function Controls(props) {
    return (
        <div className="d-flex container bg-secondary p-3 flex-row justify-content-center">
            <button className="btn btn-primary btn-circle mx-2" onClick={props.handleClick}>Reset</button>
            <button className="btn btn-primary btn-circle mx-2" data-toggle="modal" data-target="#summary">Score</button>
        </div>
    )
}