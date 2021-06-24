import React from 'react'
import AlphaLearn from './AlphaLearn.jpeg';
import './EmailRequest.css'

function EmailRequest() {
    return (
        <div className='emailRequest-container'>
            <h5 className='emailRequest-title'>From youths to youths</h5>
            <div className='emailRequest-img'>
                <img src={AlphaLearn} alt="" />
            </div>
            <div className='emailRequest-footer'>
                <div className='emailRequest-text'>
                    <h5>Alpha Community and collaborations</h5>
                    <p className='grey-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam id tempus urna, a placerat ipsum. In non neque leo.
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                    </p>

                </div>
                <div className='emailform grey lighten-3'>
                    <h6>Get updates from Alpha</h6>
                    <input className='emailform-input white' placeholder='Enter your email address' />

                    <div className="waves-effect waves-light btn blue accent-3 ">Subscribe</div>

                </div>
            </div>
        </div>
    )
}

export default EmailRequest
