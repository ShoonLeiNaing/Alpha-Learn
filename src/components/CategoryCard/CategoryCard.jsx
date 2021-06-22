import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'

export const CategoryCard = ({ title }) => {
    
    return (
        <div className='category-card'>
            <Link to='/category'>
                <div className='category-title'>
                    <h6>{title}</h6>
                </div>
            </Link>
        </div>
    )
}
