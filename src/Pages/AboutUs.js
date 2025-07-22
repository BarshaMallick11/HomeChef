import React from 'react';
import '../Style/AboutUs.css';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {FaEnvelope,FaPhoneAlt, FaFacebookF,FaInstagram } from 'react-icons/fa';



const AboutUs = () => {
  const navigate = useNavigate();
  
  return (
    <div className="about-container">
      <div className="back-button" onClick={() => navigate(-1)}>
          <AiOutlineArrowLeft className="back-icon" /> 
      </div>
      <div className="about-text">
        <h1>About HomeChef</h1>
        <p>
          Welcome to HomeChef! We're passionate about bringing the joy of cooking to everyone.
          Whether you're a beginner or a pro, you'll find delicious recipes to inspire your next meal.
          Discover hand-picked dishes, cooking tips, and explore different cuisines.
          Let’s make food fun and flavorful!
        </p>
        <div className="about-icons">
          <a href="mailto:homechef@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="social-icon email" />
          </a>
          <a href="tel:+919641648838" target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className="social-icon phone" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon facebook" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>  
        </div>
      </div>

      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1543353071-873f17a7a088" alt="Delicious Food" />
      </div>
    </div>
  );
};

export default AboutUs;
