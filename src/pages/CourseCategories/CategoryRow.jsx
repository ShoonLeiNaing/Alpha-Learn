import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class CategoryRow extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <h4>Web Development</h4>
        <Slider {...settings}>
          <div>
            <h5>1</h5>
          </div>
          <div>
            <h5>2</h5>
          </div>
          <div>
            <h5>3</h5>
          </div>
          <div>
            <h5>4</h5>
          </div>
          <div>
            <h5>5</h5>
          </div>
          <div>
            <h5>6</h5>
          </div>
          <div>
            <h5>7</h5>
          </div>
          <div>
            <h5>8</h5>
          </div>
          <div>
            <h5>9</h5>
          </div>
        </Slider>
      </div>
    );
  }
}

// min nae nga kyr pine kant char nrr htr ... 
// a sate shi tae suu pin twy yal toe loh ma pout ag site loh htr ... 
// min nae ngr chit kwint ma shi tae nae yat toh yal cleander hond twy kyr ...
// lannnnnnnnnnnnnnnn bl mr shr phway ya ma ll hayyy... lannnnnnnnnn ...