import React from 'react'
import './CourseVideo.css'

export const Lesson = ({ lesson }) => {
    const checkstate=(state)=>{
        switch(state){
            case 1: return 'check_box';break;
            case 0: return 'check_box_outline_blank';break;
            case 2: return 'play_circle_outline';break
        }
    }
    return (
        <div className={lesson.state==2?'lesson_container active':'lesson_container'} key={lesson.id}>
            <i className="material-icons">{checkstate(lesson.state)}</i>
            <p style={{ flex: 0.9 }}>{lesson.id}. {lesson.title}</p>
            <p style={{ flex: 0.1 }}>{lesson.duration}</p>
        </div>
    )
}
