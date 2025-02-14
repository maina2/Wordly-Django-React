import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css";
import heroImage from "../assets/hero-image.jpg";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Where Words Matter</h1>
          <p>Share. Engage. Inspire.</p>
          <Link to="/register" className="cta-button">Get Started</Link>
        </div>
        <img src={heroImage} alt="Writing concept" className="hero-image" />
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Why Join Wordly?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>📝 Write & Publish</h3>
            <p>Express your thoughts and share knowledge with the world.</p>
          </div>
          <div className="feature-item">
            <h3>💬 Engage & Comment</h3>
            <p>Discuss ideas, connect with readers, and build your audience.</p>
          </div>
          <div className="feature-item">
            <h3>🔥 Trending Topics</h3>
            <p>Discover the latest articles curated just for you.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"Wordly has transformed how I share my ideas with the world!"</p>
          <span>- Jane Doe, Writer</span>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="cta-section">
        <h2>Join Wordly Today!</h2>
        <Link to="/register" className="cta-button">Sign Up Now</Link>
      </footer>
    </div>
  );
};

export default LandingPage;