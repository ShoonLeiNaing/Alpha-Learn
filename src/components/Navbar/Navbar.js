import React, { useEffect } from 'react'
import './Navbar.css'
import { motion } from "framer-motion"

const Navbar = () => {
    useEffect(() => {
        const M = window.M;
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }, [])

    const textVariants={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                type:'spring',
                duration:3,
            }
        }
    }
    const buttonVariants={
        hover:{
            scale:1.2,
            transition:{
                duration:0.2
            },
            backgroundColor:'#7097AB'
        }
    }
    return (
        <>
            <header>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper background">
                        <div className='container'>
                            <a href="#!" className="brand-logo">Logo</a>
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Sign Out</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Courses</a></li>
                            </ul>
                        </div>
                    </nav>
                    <ul id="slide-out" className="sidenav">
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Sign Out</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Courses</a></li>
                    </ul>
                </div>
                <motion.div className='header__text text-color'
                variants={textVariants}
                initial='hidden'
                animate='visible'
                >
                    <h3>Alpha Learn</h3>
                    <div className='header__detailText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                    </div>
                    <motion.a class="waves-effect waves-light btn background"
                        variants={buttonVariants}
                        whileHover='hover'
                    >Go to Courses<i class="material-icons right">play_circle</i></motion.a>
                </motion.div>
            </header>

        </>
    )
}

export default Navbar
