import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryCard.css'

export const CategoryCard = ({ title }) => {

    return (
        <Link className='category-card' to='category'>
            <div className='category-title'>
                <h6>{title}</h6>
            </div>
        </Link>
    )
}
