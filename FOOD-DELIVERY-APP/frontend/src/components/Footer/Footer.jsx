import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <a href="http://localhost:5174/"><img src={assets.logo} alt="" /></a>
            <p>We delivers high-quality multi-cuisine dishes made with local and foreign ingredients, ranging from Sri Lankan specialties to Indian, Mexican, French, and Italian cuisine, as well as Japanese, Korean, and Chinese delicacies. All menus are adapted to the demands of the clients while keeping current cuisine trends in mind.</p>
            <div className="footer-social-icons">
                <a href="https://web.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://twitter.com/"><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.linkedin.com/"><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <a href="http://localhost:5173/"><li>Home</li></a>
                <a href="Company" ><li> About us</li></a>
                <a href="Company" ><li>Delivery</li></a>
                <a href="Company" ><li>Privacy policy</li></a>
            
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94 11 2222 444</li>
                <a href="https://mail.google.com/"><li>contact@Foodie.com</li></a>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Foodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
