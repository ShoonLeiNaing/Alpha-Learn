 /* eslint-disable */
import React, { useEffect } from 'react';
import M from 'materialize-css';
import './Mentors.css';

const handleAfterDocumentLoaded = () => {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, { indicators: true, fullWidth: true });
}

const Individual = props => {
    return (
        <div className="carousel-item white red-text" href={`#${props.key}!`}>
            <h2 className="roll-text">{props.roll}</h2>
            <div className="">
                <img className="circle responsive-image" src={props.image_src} alt={props.image_alt} />
            </div>
            <p className="black-text" style={{ fontSize: "1.4rem" }}>{props.name}</p>
            <p className="grey-text cus-about-text" style={{ fontSize: "1.2rem", padding: "3%" }}>{props.about}</p>
        </div>
    )
}

const LeftButton = () => {
    return (
        <div className="left white">
            <a onClick={() => {
                var el = document.querySelector(".carousel");
                var l = M.Carousel.getInstance(el);
                l.prev();
            }} className="middle-indicator-text content-indicator left">
                <i className="material-icons middle-indicator-text">chevron_left</i>
            </a>
        </div>
    )
}

const RightButton = () => {
    return (
        <div className="right white">
            <a onClick={() => {
                console.log('right clicked');
                var el = document.querySelector(".carousel");
                var l = M.Carousel.getInstance(el);
                l.next();
            }} className="middle-indicator-text content-indicator right">
                <i className="material-icons middle-indicator-text">keyboard_arrow_right</i>
            </a>
        </div>
    )
}

const NavigationButtons = () => {
    return (
        <div className="carousel-fixed-item center middle-indicator">
            <LeftButton />
            <RightButton />
        </div>
    )
}

const Mentors = () => {
    useEffect(() => {
        handleAfterDocumentLoaded();
    }, []);

    return (
        <div className="carousel carousel-slider center neg-height container">
            <NavigationButtons />

            <Individual
                key="one"
                roll="Testimonal - 1"
                name="Name : Goes Here"
                image_src="https://via.placeholder.com/185"
                image_alt="one"
                about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

            <Individual
                key="two"
                roll="Testimonal - 2"
                name="Name : Goes Here"
                image_src="https://via.placeholder.com/185"
                image_alt="two"
                about="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

            <Individual
                key="three"
                roll="Testimonal - 3"
                name="Name : Goes Here"
                image_src="https://via.placeholder.com/185"
                image_alt="three"
                about="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <Individual
                key="four"
                roll="Testimonal - 4"
                name="Name : Goes Here"
                image_src="https://via.placeholder.com/185"
                image_alt="four"
                about="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

        </div>
    );
}

export default Mentors;