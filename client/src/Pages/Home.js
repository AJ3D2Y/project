import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* ========== HERO SECTION ========== */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Luxury Nail Care Experience</h1>
          <p className="hero-subtitle">
            Indulge in premium nail care services at our state-of-the-art salon. 
            Discover elegance, beauty, and relaxation in every visit.
          </p>
          <div className="hero-cta">
            <Link to="/appointments">
              <button className="cta-button">
                ✨ Book Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="cta-button-secondary">
                View Services
              </button>
            </Link>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💅</div>
            <h3>Premium Quality</h3>
            <p>High-quality products and expert technicians ensure stunning results every time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🕐</div>
            <h3>Easy Booking</h3>
            <p>Book your appointment online in just a few clicks. No waiting, no hassle.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">😌</div>
            <h3>Relaxing Atmosphere</h3>
            <p>Enjoy a peaceful, luxurious environment designed for your ultimate relaxation.</p>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-final">
        <h2>Ready to Transform Your Nails?</h2>
        <p>Schedule your appointment today and experience the luxury treatment you deserve.</p>
        <Link to="/appointments">
          <button className="cta-button-large">Book Your Appointment Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;