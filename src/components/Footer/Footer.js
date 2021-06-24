import React from 'react'
import googleimg from '../../assets/google.png'
import appleimg from '../../assets/apple.png'
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="row">
          <div className="col l4 s12">
            <h5 className="white-text">Alpha</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="col l4 offset-l2 m6 s12">
            <h5 className="white-text">Forums</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="col l4 offset-l2 m6 s12">
            <div className='footer-image'>
              <img src={googleimg} alt=""/>
            </div>
            <div className='footer-image'>
              <img src={appleimg} alt=""/>
            </div>
            <div className='footer-icons '>
          <i className="fa fa-facebook-official" ></i>
          <i className="fa fa-comment"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
          </div>

        </div>
      </div>
      <div className="footer-copyright">

        <p> © 2014 Copyright Text</p>
       



      </div>
    </footer>

  )
}

export default Footer
