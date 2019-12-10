import React from 'react';
import githubIcon from '../images/githubIcon.png'

export default function Footer() {
  return (
    <footer>
      <p>About Us</p>
      <p>Join Us</p>
      <a href="https://github.com/sheetazita/Good-Words" target="_blank"><img className="githubIcon" src={githubIcon} /></a>
      <p>&#169; 2019 Good Words</p>
    </footer>
  )
}
