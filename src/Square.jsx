import React from 'react'

function Square({id,text,handelClick}) {
    return (
        <div 
            className="square"data-id={id} onClick={handelClick} >{text}</div>
    )
}

export default Square