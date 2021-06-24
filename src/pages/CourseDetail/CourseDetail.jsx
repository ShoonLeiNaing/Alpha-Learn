import React from 'react'
import ReadMoreReact from 'read-more-react';
import { useParams } from 'react-router-dom'
import './CourseDetail.css'

export const CourseDetail = () => {
    let { id } = useParams()

    const Header = ({ header }) => {
        return (
            <div className='courseDetail-header'>
                <div className='courseDetail-headerText'>
                    <h3>{header}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <div><i className="large material-icons" style={{ fontSize: '40px' }}>play_circle_outline</i></div>
                    <div className='waves-effect btn enroll-btn blue accent-3'>
                        Enroll {id}
                    </div>
                </div>
            </div>
        )
    }

    const Objectives = ({ title }) => {
        return (
            <div className='objectives-container'>
                <h5 className='blue-text'>{title}</h5>
                <div className='objectives'>
                    <div className='objective'>
                        <i className='material-icons'>nature_people</i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className='objective'>
                        <i className='material-icons'>nature_people</i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className='objective'>
                        <i className='material-icons'>nature_people</i>
                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className='objective'>
                        <i className='material-icons'>nature_people</i>
                        <p>Lorem ipsum dolor sit amet, consectetur  sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </div>
            </div>
        )
    }

    const CourseDetailReadmore = () => {
        const text = 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        return (
            <div className='objectives-container'>
                <h5 className='blue-text'>Course Details</h5>
                <div className='readmore'>
                    <ReadMoreReact
                        text={text}
                        min={200}
                        ideal={400}
                        max={500}
                        readMoreText='read more ...'
                    />
                </div>

            </div>
        )
    }

    const Instructor = () => {
        return (
            <div className='objectives-container'>
                <h5 className='blue-text'>Instructors</h5>
                <div className='instructors'>
                    <div className='instructor'>
                        <div className='instructor-image'>
                        </div>
                        <div className='instructor-details'>
                            <h5>Ye Min Htun</h5>
                            <p>Instructor</p>
                            <p>UI/UX department</p>
                            <div className='instructor-icons'>
                                <i className="material-icons" style={{ fontSize: '12px', marginRight: '5px' }}>import_contacts</i>
                                <p>7 courses</p>
                            </div>
                        </div>
                    </div>
                    <div className='instructor'>
                        <div className='instructor-image'>
                        </div>
                        <div className='instructor-details'>
                            <h5>Ye Min Htun</h5>
                            <p>Instructor</p>
                            <p>UI/UX department</p>
                            <div className='instructor-icons'>
                                <i className="material-icons" style={{ fontSize: '12px', marginRight: '5px' }}>import_contacts</i>
                                <p>7 courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header header='React and Redux' />
            <Objectives title='What will you learn?' />
            <Objectives title='Requirements' />
            <CourseDetailReadmore />
            <Instructor />
        </>
    )
}
