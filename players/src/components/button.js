import React from 'react'
import ButtonStyles from '../styles/button.css'


const button = ({ type, className, onClick, text}) => {
    return (
        <button className={className} 
                onClick= {onClick}>
            {text}
        </button>
    )
}

export default button
