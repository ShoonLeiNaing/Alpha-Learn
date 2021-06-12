import React from 'react'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Mentors from '../../components/Mentors/Mentors'
import './Home.css'
import EmailRequest from '../../components/EmailRequest/EmailRequest'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero/>
            <Card/>
            <EmailRequest/>
            <Mentors />
            <Footer />

        </>
    )
}
