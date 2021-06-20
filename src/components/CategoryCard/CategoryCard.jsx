import React from 'react'
import './CategoryCard.css'

export const CategoryCard = ({title}) => {
    return (
        <div className='category-card'>
            <div className='category-title'>
                <h6>{title}</h6>
            </div>
        </div>
    )
}
