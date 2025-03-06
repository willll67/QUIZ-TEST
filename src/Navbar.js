import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // 假设 App.css 中包含上述样式

const Navbar = () => {
  return (
    <div style={{ position: 'absolute', width: '1280px', height: '100px', top: 0, left: '200px' }}>
      <Link
        to="/quiz"
        className="nav-link"
        style={{
          position: 'absolute',
          width: 'fit-content',
          height: '30px',
          left: '666px',
          top: '63px',
          textAlign: 'center',
          color: 'white',
          fontSize: '30px',
          fontFamily: 'rl-aqva, sans-serif',
          fontWeight: 900,
        }}
      >
        Quiz!
      </Link>
      
      <Link
        to="/personality"
        className="nav-link"
        style={{
          position: 'absolute',
          width: 'fit-content',
          height: '30px',
          left: '826px',
          top: '63px',
          textAlign: 'center',
          color: 'white',
          fontSize: '30px',
          fontFamily: 'rl-aqva, sans-serif',
          fontWeight: 900,
          wordWrap: 'break-word'
        }}
      >
        Personality Types
      </Link>
      
      <Link
        to="/about"
        className="nav-link"
        style={{
          position: 'absolute',
          width: 'fit-content',
          height: '30px',
          left: '1155px',
          top: '63px',
          textAlign: 'center',
          color: 'white',
          fontSize: '30px',
          fontFamily: 'rl-aqva, sans-serif',
          fontWeight: 900,
          wordWrap: 'break-word'
        }}
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
