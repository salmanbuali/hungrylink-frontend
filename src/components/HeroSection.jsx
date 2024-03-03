import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="/video/Food Delivery Advertisement (Ken).mp4"
        autoPlay
        loop
        muted
      />
      <h1>DELICIOUSNESS AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="src/pages/SignIn.jsx">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Log In
          </Button>
        </Link>
        <Link to="src/pages/Register.jsx">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Sign Up <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
