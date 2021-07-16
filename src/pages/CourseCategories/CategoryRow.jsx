import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickStyles.css";
import styles from "./CategoryRow.module.css";
import settings from "./SlickSetting";
import Stars from "./Stars";

const CategoryRow = ({ courses, heading }) => { // { actual data }
  return (
    <div className={styles.container}>
      <h5 className={`${styles.course_head} blue-text text-darken-4`}>{heading}</h5>
      <Slider {...settings}>
        {courses.map((course, i) => {
          return (
            <div key={i} className={`${styles.img_card} z-depth-3`}>
              <img className={styles.img} src={course.img_src} alt={course.title} />
              <div className={styles.card_body}>
                <div className={styles.card_title}>{course.title}</div>
                <div className={styles.card_text}>{course.mentor}</div>
                <div className={styles.card_foot}>
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
