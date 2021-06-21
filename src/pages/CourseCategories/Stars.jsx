import React from 'react';

const Stars = ({ starsCount }) => {
    return (
        <>
            <FullStars stars={starsCount} />
            <NormalStars stars={starsCount} />
            &nbsp;&nbsp;
        </>
    )
}

const FullStars = ({ stars }) => {
    // calculate star rate, not counting from the sky 🤣
    const fullStars = [];
    for (let i = 1; i <= stars; i++) {
        fullStars.push(
            <i key={i} className="fa fa-star"></i>
        );
    }

    return (
        <span style={{ color: "#ffd300" }}>
            {fullStars}
        </span>
    )
}

const NormalStars = ({ stars }) => {
    const normalStars = [];
    for (let i = 0; i < 5 - stars; i++) {
        normalStars.push(
            <i key={i} className="fa fa-star"></i>
        )
    }
    return (
        <span style={{ color: "#999da0" }}>
            {normalStars}
        </span>
    )
}

export default Stars;