import React from 'react';
import M from 'materialize-css';
import './Mentors.css';
// import Profile from './images/unnamed.png'

var Individual = (props) => {
    return (
        <>
            <p>Roll</p>
            <img alt={props.alt} src={props.src} />
            <p>Name</p>
        </>
    )
}

var Mentors = () => {
    document.addEventListener('DOMContentLoaded', function () {
        // M.AutoInit();
        //carousel activation
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems,
            {
                fullWidth: true,
                indicators: false,
                numVisible: 3
            });
    });
    return (
        <div className="carousel carousel-slider center">
            <div className="carousel-fixed-item center middle-indicator">
                <div className="left">
                    <a onClick={() => {
                        var el = document.querySelector(".carousel");
                        var l = M.Carousel.getInstance(el);
                        l.prev(1);
                    }} className="movePrevCarousel middle-indicator-text content-indicator left"><i className="material-icons middle-indicator-text">chevron_left</i></a>
                </div>

                <div className="right">
                    <a onClick={() => {
                        var el = document.querySelector(".carousel");
                        var l = M.Carousel.getInstance(el);
                        l.next(1);
                    }} className="moveNextCarousel middle-indicator-text content-indicator right"><i className="material-icons middle-indicator-text">chevron_right</i></a>
                </div>
            </div>

            <div className="carousel-item white red-text row" href="#two!">
                <h2 className="col s12">Mentor Roll - 1</h2>
                <div className="col s12">
                    <img className="circle responsive-image" src="https://via.placeholder.com/200" />
                </div>
                <p className="col s12 blue-text">Name : Goes Here</p>
                <p style={{ marginBottom: "3%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="carousel-item white red-text row" href="#two!">
                <h2 className="col s12">Mentor Roll - 2</h2>
                <div className="col s12">
                    <img className="circle responsive-image" src="https://via.placeholder.com/200" />
                </div>
                <p className="col s12 blue-text">Name : Goes Here</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="carousel-item white red-text row" href="#two!">
                <h2 className="col s12">Mentor Roll - 3</h2>
                <div className="col s12">
                    <img className="circle responsive-image" src="https://via.placeholder.com/200" />
                </div>
                <p className="col s12 blue-text">Name : Goes Here</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="carousel-item white red-text row" href="#two!">
                <h2 className="col s12">Mentor Roll - 4</h2>
                <div className="col s12">
                    <img className="circle responsive-image" src="https://via.placeholder.com/200" />
                </div>
                <p className="col s12 blue-text">Name : Goes Here</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

    );
}

export default Mentors;