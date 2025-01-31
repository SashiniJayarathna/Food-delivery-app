import React from 'react';
import { assets } from '../../assets/assets';
import './Company.css'; 

const Company = () => {
  return (
    <div className="company-container">
      <div className="section" >
        <h1>About Us</h1>
        <img src={assets.About} alt="About Us" />
        <p>At Foodie, we're passionate about bringing delicious meals from your favorite local restaurants right to your doorstep. 
          Our mission is to connect food lovers with a wide variety of cuisines, offering a seamless and convenient dining experience from the comfort of your home or office. 
          Whether you're craving a quick snack, a hearty dinner, or something special for an occasion, we ensure fast and reliable delivery while supporting local businesses. 
          With an easy-to-use platform, secure payment options, and a commitment to customer satisfaction, we aim to make every meal memorable. Explore, order, and enjoy – all at your fingertips!
        </p>
      </div>
      <div className="section" >
        <h1>Privacy and Data Protection</h1>
        <img src={assets.Privacy} alt="Privacy" />
        <p>At Foodie, we are committed to safeguarding your personal information and respecting your privacy. 
          We collect, store, and use your data solely to improve your experience on our platform, including facilitating orders, ensuring secure transactions, and personalizing your interactions with us. 
          We do not share your information with third parties without your consent, except for the purpose of fulfilling your orders or as required by law. 
          Our app employs robust security measures to protect your data against unauthorized access. By using our services, you agree to the terms of this privacy policy, which may be updated periodically to enhance your data protection.</p>
      </div>
      <div className="section" >
        <h1>Delivery Services</h1>
        <img src={assets.Delivery} alt="Delivery" />
        <p>At Foodie, we strive to deliver your meals quickly and efficiently, ensuring that your food arrives fresh and on time. 
          Our delivery network covers a wide range of locations, connecting you with your favorite restaurants and eateries. 
          You can track your order in real-time, from preparation to arrival at your doorstep. 
          We offer flexible delivery options, including scheduled deliveries, to suit your needs. 
          In the rare event of a delay or issue, our customer support team is available to assist you promptly. Enjoy hassle-free dining, no matter where you are!</p>
      </div>
    </div>
  );
};

export default Company;
