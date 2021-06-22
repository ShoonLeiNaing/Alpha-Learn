import React from 'react'
import Card from '../../components/Card/Card'
import Hero from '../../components/Hero/Hero'
import Mentors from '../../components/Mentors/Mentors'
import './Home.css'
import EmailRequest from '../../components/EmailRequest/EmailRequest'

export const Home = () => {
    return (
        <>
            <Hero />
            <Card />
            <EmailRequest />
            <Mentors />
        </>
    )
}
