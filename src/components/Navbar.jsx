import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.jpeg'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ marginRight: '80px', position: 'fixed', top: '0', width: '100%', zIndex: '1000', marginTop: '0', paddingTop: '0' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Logo */}
        <img
          src={Logo}
          width="250"
          height="100"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-5">
              <a className="nav-link fs-5" href="#about" style={{ color: 'blue', fontStyle: 'italic' }}>𝘼𝙗𝙤𝙪𝙩</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link fs-5" href="#services" style={{ color: 'blue', fontStyle: 'italic' }}>𝙎𝙚𝙧𝙫𝙞𝙘𝙚𝙨</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link fs-5" href="#team" style={{ color: 'blue', fontStyle: 'italic' }}>𝙏𝙚𝙖𝙢</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link fs-5" href="#contact" style={{ color: 'blue', fontStyle: 'italic' }}>𝘾𝙤𝙣𝙩𝙖𝙘𝙩</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
