import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { FeaturedCourse } from '../../components/FeaturedCourse/FeaturedCourse'
import Footer from '../../components/Footer/Footer'
import { Input } from '../../components/Input/Input'
import Navbar from '../../components/Navbar/Navbar'
import './Explore.css'

export const Explore = () => {
    return (
        <div className='explore-container'>
            <Navbar/>
            <Input title="Let's learn today"/>
            
            <h5 className='hot-categories blue-text'>Hot Categories</h5>
            <div className='categoryCard-container'>
                <CategoryCard title='Business & Economics'/>
                <CategoryCard title='Art & Design'/>
                <CategoryCard title='Languages'/>
                <CategoryCard title='Startup & Innovation'/>
                <CategoryCard title='Computer Science'/>
                <CategoryCard title='Health & Nursing'/>
            </div>
            
            <h5>Featured Courses</h5>
            <FeaturedCourse/>
            <FeaturedCourse reverse/>
            <Footer/>
        </div>
    )
}
