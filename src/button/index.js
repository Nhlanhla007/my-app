import React from 'react'
//class functional
const Mybutton = (props) => {
    return (
    <button 
        style={{backgroundColor:props.buttonColor}}
        onClick={props.onButton}
    >
        {props.title}
    </button>
    )
}

export default Mybutton;