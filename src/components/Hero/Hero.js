import React from 'react'
import './Hero.css'
import img from '../../assets/image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero__container grey lighten-2'>
            <div className='row'>
                <div className='col s12 m12 left-container'>
                    <h3 className='hero-text'>Become <br /> what you <br />want to be </h3>
                    <Link to='/explore' class="waves-effect waves-light btn  blue accent-3 heroBtn" >Explore </Link>
                </div>
                <div className='col s12 m12 image-container'>
                    <img src={img} alt="" />
                </div>
                <i class="fa fa-facebook-square"></i>
            </div>
        </div>
    )
}

export default Hero
