import React from 'react';
import './Header.css';
import cv from '../../assets/CV.pdf';
import me from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <h5>Hello I'm</h5>
          <h1>Mostafa Mahmoud</h1>
          <h5 className="text-light">Front-end Development</h5>
          <div className="cta">
            <a href={cv} className='btn' download>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          <HeaderSocial />
          <div className="me">
            <img src={me} alt="" />
          </div>

          <a href="#contact" className='scroll'>scroll down</a>
        </div>
      </header>
    </>
  )
}
