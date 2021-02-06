import React from 'react'

export default function TypeBox(props) {
    return (
        <div className="container form-group bg-secondary p-3">
            {
                props.disabled ?
                <input type="text" className="form-control" placeholder="start typing here..." disabled/>
                : <input 
                    ref={props.inputRef}
                    onChange={props.handleChange} 
                    type="text" 
                    className="form-control" 
                    placeholder="start typing here..." 
                />
            }
        </div>
    )
}