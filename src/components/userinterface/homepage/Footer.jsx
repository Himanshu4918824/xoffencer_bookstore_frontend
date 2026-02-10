import React from 'react';
import logo  from "../../../assets/logo.png"
const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black', // Deep dark background
    color: '#a0a0a5',           // Muted text color
    padding: '80px 0 40px 0',
    fontSize: '0.9rem'
  };

  const headerStyle = {
    color: '#ffffff',
    fontSize: '0.75rem',
    letterSpacing: '2px',
    fontWeight: 'bold',
    marginBottom: '25px',
    textTransform: 'uppercase'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    marginBottom: '12px',
    transition: 'color 0.2s'
  };

  const logoStyle = {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'serif',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  return (
    <div style={footerStyle}>
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">

            <div style={logoStyle} className="mb-4">
              <img src={logo} style={{ color: '#3b82f6',width:40 }}></img> Xoffencer Bookstore
            </div>

            <p className="pe-lg-5" style={{ lineHeight: '1.6' }}>
              A sanctuary for the discerning reader. We curate literature that
              challenges, inspires, and endures the test of time.
            </p>

        <div className="d-flex gap-4 mb-4">
          <i className="bi bi-facebook fs-5 text-white"></i>
          <i className="bi bi-twitter fs-5 text-white"></i>
          <i className="bi bi-instagram fs-5 text-white"></i>
          <i className="bi bi-youtube fs-5 text-white"></i>
        </div>
           
          </div>

          {/* Explore Column */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 style={headerStyle}>Explore</h6>
            <a href="#" style={linkStyle}>Catalog</a>
            <a href="#" style={linkStyle}>Digital Library</a>
            <a href="#" style={linkStyle}>Rare Books</a>
            <a href="#" style={linkStyle}>Gifts</a>
          </div>

          {/* Community Column */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 style={headerStyle}>Community</h6>
            <a href="#" style={linkStyle}>Book Club</a>
            <a href="#" style={linkStyle}>Events</a>
            <a href="#" style={linkStyle}>Podcasts</a>
            <a href="#" style={linkStyle}>Authors</a>
          </div>

          {/* Support Column */}
          <div className="col-6 col-md-4 col-lg-2">
            <h6 style={headerStyle}>Support</h6>
            <a href="#" style={linkStyle}>Contact Us</a>
            <a href="#" style={linkStyle}>Shipping & Returns</a>
            <a href="#" style={linkStyle}>Store Locator</a>
            <a href="#" style={linkStyle}>FAQ</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="mt-5 mb-4" />
        
        <div className="text-center" style={{ fontSize: '0.8rem' }}>
          <p className="mb-3">© 2024 Serif Bookstore. All rights reserved.</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;