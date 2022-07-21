import React, { useState } from 'react';
import '../styles/Cell.css';
import mineSrc from '../assets/mine.svg';
import flagSrc from '../assets/flag.svg';


const Cell = (props) => {
    //const [fieldText, setFieldText] = useState('')
    //const fieldName = props.fieldName

    let cellContent;
    if (props.clickState == 1){
        //if this has been right clicked, display flag on top of the tile
        cellContent = <div className="status-tile">
            <img className="flag-tile" src={flagSrc}></img>
        </div> 
    } else if (props.status == -1) {
        //eventually a mine icon img tag
        cellContent = <div className="status-tile">
            <img className='mine-tile' src={mineSrc}></img>
        </div>
    } else{
        //renders a status display
        cellContent = <div className={`status-tile status-${props.status}`}>
            <span>{props.status}</span>
        </div>
    } 

    const getClickClass = () => {
        let className;
        if (props.clickState == 0) {
            className = 'un-clicked'
        } else if (props.clickState == -1){
            className = 'clicked'
        }
        return className
    }
    
    const cellLClick = (e) => {
        let clickData = {
            event: e,
            position: props.position,
            type: 'left'
        }
        props.onClick(clickData)
    }

    const cellRClick = (e) => {
        e.preventDefault()
        let clickData = {
            event: e,
            position: props.position,
            type: 'right'
        }
        props.onClick(clickData)
    }

    return (
        <div className={`cell`} onClick={cellLClick} onContextMenu={cellRClick}>
            <div className={`cell-content ${getClickClass()}`}>
                {cellContent}
            </div>
        </div>
    )
}

export default Cell;
