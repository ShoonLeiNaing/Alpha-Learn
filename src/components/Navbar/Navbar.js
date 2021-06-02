import React, { useEffect } from 'react'
import './Navbar.css'
import { motion } from "framer-motion"

const Navbar = () => {
    useEffect(() => {
        const M = window.M;
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }, [])

    const textVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 3,
            }
        }
    }
    const buttonVariants = {
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.2
            },
            backgroundColor: '#7097AB'
        }
    }
    return (
        <>
            <header>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper white">
                        <div className='nav-container'>
                            <div><a href="#!" className="brand-logo black-text ">Logo</a></div>
                            <a href="#" data-target="slide-out" className="sidenav-trigger black-text"><i className="material-icons">menu</i></a>
                            <div className='input-container'>
                               <input placeholder='what do you want to learn today?'/>
                               <i class="material-icons black-text">search</i>
                            </div>
                            <ul className="right hide-on-med-and-down black-text">
                                <li><a href="#" className='black-text'>Home</a></li>
                                <li><a href="#" className='black-text'>Courses</a></li>
                                <li><a href="#" className='black-text'>Campus</a></li>
                                <li><a href="#" className='black-text'>Blog</a></li>
                                <li><div className='btn-container'><a class="waves-effect waves-light btn blue accent-3">Login</a></div></li>
                            </ul> 
                        </div>
                    </nav>
                    <ul id="slide-out" className="sidenav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Campus</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a class="waves-effect waves-light btn">Login</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar
