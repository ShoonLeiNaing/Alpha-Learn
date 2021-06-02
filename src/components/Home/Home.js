import React from 'react'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import './Home.css'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <Card/>
            <Footer/>
        </>
    )
}
