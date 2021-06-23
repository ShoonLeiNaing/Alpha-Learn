import React from 'react';
import CategoryRow from "./CategoryRow";
import products, { android, databases } from "./Products";
import { Link } from 'react-router-dom';

const CourseCategories = () => {
    let id = 2 // fetch actual data
    return (
        <>
            {/* Course Main Header */}
            <div className="center">
                <h4 className="blue-text text-darken-3">Computer Science</h4>
            </div>

            {/* Course Category Row */}
            <CategoryRow heading="Web development" courses={products} />
            <Link to={`/course-detail/${id}`}><CategoryRow heading="Web development" courses={products} /></Link>
            <Link to={`/course-detail/${id}`}><CategoryRow heading="Android development" courses={android} /></Link>
            <Link to={`/course-detail/${id}`}><CategoryRow heading="Database SQL/NoSQL" courses={databases} /></Link>
            <Link to={`/course-detail/${id}`}><CategoryRow heading="Product Designing" courses={products} /></Link>
            <Link to={`/course-detail/${id}`}><CategoryRow heading="Sever Side" courses={products} /></Link>
        </>
    );
}

export default CourseCategories;