import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <section className="about-hero">
          <h1>About Us</h1>
          <p className="about-subtitle">Learn more about our mission and values</p>
        </section>

        <section className="about-content">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to revolutionize the industry, we have been dedicated to 
              providing exceptional services and innovative solutions to our clients. Our journey 
              began with a simple belief: that technology should be accessible, powerful, and 
              transformative.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower businesses and individuals by delivering cutting-edge 
              solutions that drive growth and success. We strive to exceed expectations and 
              build lasting relationships with our clients through excellence, integrity, and 
              innovation.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Excellence</h3>
                <p>We are committed to delivering the highest quality in everything we do.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We embrace new technologies and creative solutions to solve complex problems.</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>We conduct business with honesty, transparency, and ethical practices.</p>
              </div>
              <div className="value-item">
                <h3>Customer Focus</h3>
                <p>Our clients' success is our top priority and driving force.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <p>
              We are a diverse team of passionate professionals, experts in their fields, 
              working together to bring you the best solutions. Each team member brings unique 
              skills and perspectives, creating a collaborative environment that fosters 
              innovation and excellence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

