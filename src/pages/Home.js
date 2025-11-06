import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Devudu</h1>
          <p className="hero-subtitle">Your trusted partner for innovative solutions</p>
          <p className="hero-description">
            We provide cutting-edge services and products designed to help you achieve your goals.
            Experience the difference with our professional and reliable solutions.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with 99.9% uptime guarantee</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security to protect your data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative</h3>
              <p>Cutting-edge technology and modern solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* New: Image Gallery */}
      <section className="gallery">
        <div className="container">
          <h2>Inspiration</h2>
          <div className="gallery-grid">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="Mountain landscape" />
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" alt="Creative workspace" />
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="Code and laptop" />
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop" alt="Team collaboration" />
            <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop" alt="Abstract colors" />
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="Device mockups" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

