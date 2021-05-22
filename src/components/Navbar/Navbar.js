import React, { useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    useEffect(() => {
        const M = window.M;
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }, [])
    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper background">
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
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Sign Out</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Courses</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
