import React from 'react';

const Stars = (props) => {
    return (
        <>
            <FullStars stars={props.starsCount} />
            <NormalStars stars={props.starsCount} />
        &nbsp;&nbsp;
        </>
    )
}

const FullStars = (props) => {
    // calculate star rate, not counting from the sky
    const fullStars = [];
    for (let i = 1; i <= props.stars; i++) {
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

const NormalStars = (props) => {
    const normalStars = [];
    for (let i = 0; i < 5 - props.stars; i++) {
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