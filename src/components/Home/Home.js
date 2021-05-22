import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Home.css'

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='home__container'>
                    Home
           </div>
            </div>
            <Footer />
        </>
    )
}
