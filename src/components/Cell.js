import React, { useState } from 'react';
import '../styles/Cell.css';


const Cell = (props) => {
    //const [fieldText, setFieldText] = useState('')
    //const fieldName = props.fieldName
    let dsp;

    if (props.status == -1) {
        dsp = 'M'
    } else if (props.status == -2) {
        //should be == 0
        dsp = ''
    } else {
        dsp = props.status
    } 

    let stylin;

    if (props.isClicked) {
        stylin = {
            color: 'green'
        }
    } else {
        stylin = {
            color: 'white'
        }
    }

    const cellClick = (e) => {
        console.log(e)
        e.preventDefault()
        props.onClick(e, props.position)
    }

    const cellRiteClick = (e) => {
        e.preventDefault()
        props.onRClick(e, props.position)
    }

    return (
        <div className="cell" onClick={cellClick} style={stylin} onContextMenu={cellRiteClick}>
            {dsp}
        </div>
    )
}

export default Cell;
