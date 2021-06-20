import React from 'react'
import './Input.css'

export const Input = ({title}) => {
    return (
        <div className='exploreInput-container blue-text'>
            <h4>{title}</h4>
            <div className='exploreInput'>
                <input placeholder='Search courses' />
                <i class="material-icons grey-text">search</i>
            </div>
        </div>
    )
}
