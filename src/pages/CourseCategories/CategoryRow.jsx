import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CourseCategory.css";
import settings from "./SlickSetting";


const Stars = () => {
  // calculate star rate, not counting from the sky
  return (
    <>
      <span style={{ color: "#ffd300" }}>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        &nbsp;&nbsp;
      </span>

    </>
  )
}


const CategoryRow = () => {
  const products = [
    {
      img: "https://via.placeholder.com/165",
      title: 'React & Redux',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'Time Management',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'JavaScript Fullcourse',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'Graphic Design',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'Odio ut enim',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'Odio ut enim',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'Odio ut enim',
      text: 'By Someone',
      total: 433201
    },
    {
      img: 'https://via.placeholder.com/165',
      title: 'Odio ut enim',
      text: 'By Someone',
      total: 433201
    }
  ]

  return (
    <>
      {/* Course Header */}
      <div className="center">
        <h4 className="blue-text text-darken-3">Computer Science</h4>
      </div>
      {/* Course Header End */}

      {/* Course Category Row */}
      <div className="container">
        <h5 className="blue-text text-darken-2">Web Development</h5>
        <Slider {...settings}>
          {products.map((x, i) => {
            return (
              <div key={i} className="m-cc-img-card">
                <img className="m-cc-img" src={x.img} alt={x.title} />
                <div className="m-cc-card-body">
                  <div className="m-cc-card-title">{x.title}</div>
                  <div className="m-cc-card-text">{x.text}</div>
                  <div className="m-cc-card-foot"><Stars />{x.total}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      {/* Course Category Row End */}

      <div className="container">
        <h5 className="blue-text text-darken-2">Android Development</h5>
        <Slider {...settings}>
          {products.map((x, i) => {
            return (
              <div key={i} className="m-cc-img-card">
                <img className="m-cc-img" src={x.img} alt={x.title} />
                <div className="m-cc-card-body">
                  <div className="m-cc-card-title">{x.title}</div>
                  <div className="m-cc-card-text">{x.text}</div>
                  <div className="m-cc-card-foot"><Stars />{x.total}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

      <div className="container">
        <h5 className="blue-text text-darken-2">Product Designing</h5>
        <Slider {...settings}>
          {products.map((x, i) => {
            return (
              <div key={i} className="m-cc-img-card">
                <img className="m-cc-img" src={x.img} alt={x.title} />
                <div className="m-cc-card-body">
                  <div className="m-cc-card-title">{x.title}</div>
                  <div className="m-cc-card-text">{x.text}</div>
                  <div className="m-cc-card-foot"><Stars />{x.total}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

      <div className="container">
        <h5 className="blue-text text-darken-2">Databases SQL/NoSQL</h5>
        <Slider {...settings}>
          {products.map((x, i) => {
            return (
              <div key={i} className="m-cc-img-card">
                <img className="m-cc-img" src={x.img} alt={x.title} />
                <div className="m-cc-card-body">
                  <div className="m-cc-card-title">{x.title}</div>
                  <div className="m-cc-card-text">{x.text}</div>
                  <div className="m-cc-card-foot"><Stars />{x.total}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

      <div className="container">
        <h5 className="blue-text text-darken-2">Sever Side</h5>
        <Slider {...settings}>
          {products.map((x, i) => {
            return (
              <div key={i} className="m-cc-img-card">
                <img className="m-cc-img" src={x.img} alt={x.title} />
                <div className="m-cc-card-body">
                  <div className="m-cc-card-title">{x.title}</div>
                  <div className="m-cc-card-text">{x.text}</div>
                  <div className="m-cc-card-foot"><Stars />{x.total}</div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

    </>
  );
}

export default CategoryRow;