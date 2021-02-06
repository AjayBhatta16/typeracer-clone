import React from 'react'

export default function Display(props) {
    return (
        <div className="container bg-secondary p-3 my-5 text-light">
            <p>
                {props.quote.split('').map((ch, index) => {
                    return index >= props.input.length ? <span key={index}>{ch}</span> : (
                        <span key={index} className={ch === props.input.charAt(index) ? 'right' : 'wrong'}>
                            {ch}
                        </span>
                    )
                })}
            </p>
        </div>
    )
}