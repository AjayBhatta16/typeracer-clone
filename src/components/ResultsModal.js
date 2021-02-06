import React from 'react'

export default function ResultsModal(props) {
    return (
        <div className="modal" id="summary">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Your typing stats</h3>
                        <button className="close" data-dismiss="modal" type="button">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Typing Speed: {props.wpm} Words per minute</p>
                        <p>Accuracy: {props.acc}%</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-danger" data-dismiss="modal" type="button">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}