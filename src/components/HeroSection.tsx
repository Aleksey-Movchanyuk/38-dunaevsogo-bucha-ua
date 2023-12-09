import React from 'react';
import './HeroSection.css'; // Ensure you have this CSS file for styling

const HeroSection: React.FC = () => {
  // Path to the video in the public folder
  const videoSrc = process.env.PUBLIC_URL + '/videos/bucha-aero-2.mp4'; 

  return (
    <section className="hero-section">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1>Дуплекс з ремонтом в закритому котеджному містечку</h1>
      </div>
    </section>
  );
};

export default HeroSection;
