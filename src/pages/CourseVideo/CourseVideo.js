import React from 'react'
import './CourseVideo.css'
import { Lesson } from './Lesson'
import { lessons } from './lessons'

export const CourseVideo = () => {
    return (
        <div className='courseVideo_container row white-text'>
            <div className='courseVideo_title'>
                <h3>React & Redux</h3>
                <p className='#e0e0e0'>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>

            </div>
            <div className='courseVideo_lowerCotainer'>
                <div className='courseVideo_left'>
                  
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    
                </div>
                <div className='courseVideo_right #e0e0e0'>
                    <p>5 Lessons ( 165 mins )</p>
                    {lessons.map((lesson)=>(
                        <Lesson lesson={lesson} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
