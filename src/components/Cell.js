import React, { useState } from 'react';
import '../styles/Cell.css';


const Cell = (props) => {
    //const [fieldText, setFieldText] = useState('')
    //const fieldName = props.fieldName
    let isMine = props.isMine
    let status;

    if (isMine) {
        status = 'M'
    } else {
        status = ''
    }

    return (
        <div className="cell">
            <p className='status'>{status}</p>
        </div>
    )
}

export default Cell;
