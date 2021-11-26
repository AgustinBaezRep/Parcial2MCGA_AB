import React from 'react'
import InputStyles from '../styles/input.css'

const input = ({ type, placeholder, className}) => {
    return (
        <input type={type} 
               placeholder={placeholder}
               className={className}>
        </input>
    )
}

export default input
