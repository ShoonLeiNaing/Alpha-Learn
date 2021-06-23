import React from 'react'
import googleimg from '../../assets/google.png'
import appleimg from '../../assets/apple.png'
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="footer-container">
        <div class="row">
          <div class="col l4 s12">
            <h5 class="white-text">Alpha</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div class="col l4 offset-l2 m6 s12">
            <h5 class="white-text">Forums</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
          <div class="col l4 offset-l2 m6 s12">
            <div className='footer-image'>
              <img src={googleimg} />
            </div>
            <div className='footer-image'>
              <img src={appleimg} />
            </div>
            <div className='footer-icons '>
          <i class="fa fa-facebook-official" ></i>
          <i class="fa fa-comment"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </div>
          </div>

        </div>
      </div>
      <div class="footer-copyright">

        <p> © 2014 Copyright Text</p>
       



      </div>
    </footer>

  )
}

export default Footer
