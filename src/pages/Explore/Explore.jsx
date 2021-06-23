import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'
import { FeaturedCourse } from '../../components/FeaturedCourse/FeaturedCourse'
import { Input } from '../../components/Input/Input'
import './Explore.css'
import CategoryRow from "../CourseCategories/CategoryRow";
import { hotProducts } from "../CourseCategories/Products"; // fetch actual data

export const Explore = () => {

    let id = 2 // fetch actual data
    return (
        <div className='explore-container'>
            <Input title="Let's learn today" />
            <h5 className='hot-categories blue-text'>Hot Categories</h5>
            <div className='categoryCard-container'>
                <CategoryCard title='Business & Economics' />
                <CategoryCard title='Art & Design' />
                <CategoryCard title='Languages' />
                <CategoryCard title='Startup & Innovation' />
                <CategoryCard title='Computer Science' />
                <CategoryCard title='Health & Nursing' />
            </div>

            <Link to={`/course-detail/${id}`}><CategoryRow heading="Most Viewed Courses" courses={hotProducts} /></Link>

            <h5>Featured Courses</h5>
            <FeaturedCourse />
            <FeaturedCourse reverse />
        </div>
    )
}
