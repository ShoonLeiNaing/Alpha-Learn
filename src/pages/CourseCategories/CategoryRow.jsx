import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CourseCategory.css";
import Stars from "./Stars";
import settings from "./SlickSetting";

const CategoryRow = ({ courses, heading }) => { // { actual data }
  return (
    <div className="m-cc-container">
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

export default CategoryRow;
