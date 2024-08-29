import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Location.css';
import NavBar from '../Components/NavBar';

const Location = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/HomePage');
  };

  return (
    <div>
      <NavBar />
      <div className="service-page">
        <header className="location-header">
         
         
           
        
        </header>
        <div className="left-side">
          <h1 className="service-title">Location</h1>
          <p className="service-description">
            {/* Description can be added here */}
          </p>
          <div className="contact-info">
            <p>Instagram: <a href="https://www.instagram.com/yourprofile">yourprofile</a></p>
            <p>WhatsApp: <a href="https://wa.me/yourphonenumber">yourphonenumber</a></p>
          </div>
        </div>
        <div className="right-side">
          <iframe
            title="Location Map"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=WXQ5+58F,%20BK%20Pudur,%20Sugunapuram%20East,%20Kuniyamuthur,%20Tamil%20Nadu%20641008+(clearAhhh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
