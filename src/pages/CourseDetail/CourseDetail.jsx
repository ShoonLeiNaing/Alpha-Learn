import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './CourseDetail.css'

export const CourseDetail = () => {

    const Header =({header})=>{
        return(
            <div className='courseDetail-header'>
                <div className='courseDetail-headerText'>
                    <h3>{header}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <div><i class="large material-icons" style={{fontSize:'40px'}}>play_circle_outline</i></div>
                    <div className='waves-effect btn enroll-btn blue accent-3'>
                        Enroll
                    </div>
                </div>
            </div>
        )
    }

    const Objectives=({})=>{
        return(
            <div className='objectives-container'>
                <h5>What will you learn?</h5>

            </div>
        )
    }
    
    return (
        <>
        
        <Navbar/>
        <Header header='React and Redux'/>
        <Objectives/>
        <Footer/>
        </>
    )
}
