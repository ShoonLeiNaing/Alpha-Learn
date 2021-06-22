import React from 'react'
import './FeaturedCourse.css'

export const FeaturedCourse = (props) => {
    return (
        <div className={props.reverse ? 'featuredcourse-containerReverse' : 'featuredcourse-container'}>
            <img className='featuredcourse-image' src="https://i.pinimg.com/originals/e9/4e/24/e94e2476103fe5ec12f1f4095a55492c.png" alt="" />
            <div className='featuredcourse-detail'>
                <h4>Introduction To UX</h4>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <div className={props.reverse ? 'durationReverse' : 'duration'}>
                    <span>Beginner</span>
                    <i className="material-icons">equalizer</i>
                </div>
                <div className={props.reverse ? 'durationReverse' : 'duration'}>
                    <span>2weeks at 4hrs/week</span>
                    <i className="material-icons">access_time</i>
                </div>
            </div>
        </div>
    )
}
