import React from 'react';
import githubIcon from '../images/githubIcon.png'

export default function Footer() {
  return (
    <footer>
      <p>About Us</p>
      <p>Join Us</p>
      <img className="githubIcon" src={githubIcon} />
      <p>&#169; 2019 Good Words</p>
    </footer>
  )
}
