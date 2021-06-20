import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CourseCategory.css";
import Stars from "./Stars";
import settings from "./SlickSetting";
import products, { android, databases } from "./Products";


const Individual = ({ products, head }) => {
  return (
    <div className="category-container">
      <h5 className="blue-text text-darken-4 m-cc-course-head">{head}</h5>
      <Slider {...settings}>
        {products.map((x, i) => {
          return (
            <div key={i} className="m-cc-img-card z-depth-3">
              <img className="m-cc-img" src={x.img_src} alt={x.title} />
              <div className="m-cc-card-body">
                <div className="m-cc-card-title">{x.title}</div>
                <div className="m-cc-card-text">{x.mentor}</div>
                <div className="m-cc-card-foot">
                  <Stars starsCount={x.stars} />
                  {x.total}
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
      <Individual head="Web development" products={products} />
      <Individual head="Android development" products={android} />
      <Individual head="Database SQL/NoSQL" products={databases} />
      <Individual head="Product Designing" products={products} />
      <Individual head="Sever Side" products={products} />
      {/* Course Category Row End */}
    </>
  );
}

export default CategoryRow;