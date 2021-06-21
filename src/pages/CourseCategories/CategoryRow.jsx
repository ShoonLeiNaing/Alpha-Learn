import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CourseCategory.css";
import Stars from "./Stars";
import settings from "./SlickSetting";
import products, { android, databases } from "./Products";


const Individual = ({ courses, heading }) => {
  return (

    <div className="category-container">
      <h5 className="blue-text text-darken-4 m-cc-course-head">{heading}</h5>
      <Slider {...settings}>
        {courses.map((course, i) => {
          return (
            <div key={i} className="m-cc-img-card z-depth-3">
              <img className="m-cc-img" src={course.img_src} alt={course.title} />
              <div className="m-cc-card-body">
                <div className="m-cc-card-title">{course.title}</div>
                <div className="m-cc-card-text">{course.mentor}</div>
                <div className="m-cc-card-foot">
                  <Stars starsCount={course.stars} />
                  {course.total}
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}


const CategoryRow = () => {

  // fetch actual data. //

  return (
    <>
      {/* Course Main Header */}
      <div className="center">
        <h4 className="blue-text text-darken-3">Computer Science</h4>
      </div>
      {/* Course Main Header End */}

      {/* Course Category Row */}
      <Individual heading="Web development" courses={products} />
      <Individual heading="Android development" courses={android} />
      <Individual heading="Database SQL/NoSQL" courses={databases} />
      <Individual heading="Product Designing" courses={products} />
      <Individual heading="Sever Side" courses={products} />
      {/* Course Category Row End */}
    </>
  );
}

export default CategoryRow;