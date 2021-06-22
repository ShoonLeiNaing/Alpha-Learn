import React, { useEffect } from 'react'
import './Navbar.css'
import { motion } from "framer-motion"

const Navbar = () => {
    useEffect(() => {
        const M = window.M;
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
        var dropdown = document.querySelector('.dropdown-trigger')
        M.Dropdown.init(dropdown, {})

    }, [])

    return (
        <>
            <header>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper white">
                        <div className='nav-container'>
                            <a data-target="slide-out" className="sidenav-trigger black-text"><i className="material-icons">menu</i></a>
                            <div><a className="brand-logo black-text ">Logo</a></div>
                            <div className='input-container'>
                                <input placeholder='what do you want to learn today?' />
                                <i class="material-icons black-text">search</i>
                            </div>

                            <ul id="extra-dropdown" class="dropdown-content">

                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li><a href="#!">three</a></li>

                            </ul>
                            <ul className="right hide-on-med-and-down black-text">
                                <li className='dropdown'><a class="dropdown-trigger black-text" data-target="extra-dropdown">More<i class="material-icons right">arrow_drop_down</i></a></li>

                                <li><a href="/" className='black-text'>Home</a></li>
                                <li><a href="/explore" className='black-text'>Courses</a></li>
                                <li><a href="#" className='black-text'>Campus</a></li>
                                <li><div className='btn-container'><a class="waves-effect waves-light btn blue accent-3 nav-btn">Login</a></div></li>
                            </ul>
                        </div>

                    </nav>
                </div>
                <ul id="slide-out" className="sidenav sidenav-close">
                    <li><a href="/">Home</a></li>
                    <li><a href="/explore">Courses</a></li>
                    <li><a href="#">Campus</a></li>
                    <li><a class="waves-effect waves-light btn nav-btn blue accent-3">Login</a></li>
                </ul>

            </header>
        </>
    )
}

export default Navbar
