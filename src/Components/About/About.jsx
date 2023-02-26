import React from 'react'
import './About.css';
import Me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-5">
            <div className="about__me">
              <div className="about__me-img">
                <img src={Me} className='img-fluid w-100' alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6 p-5">
            <div className="about__content">
              <div className="about__cards">
                <div className="row">
                  <div className="col-md-4">
                    <article className='about__card'>
                      <FaAward className='about_icon' />
                      <h5>Experience</h5>
                      <small>Working</small>
                    </article>
                  </div>
                  <div className="col-md-4">
                    <article className='about__card'>
                      <FiUsers className='about_icon' />
                      <h5>Clients</h5>
                      <small>Working</small>
                    </article>
                  </div>
                  <div className="col-md-4">
                    <article className='about__card'>
                      <VscFolderLibrary className='about_icon' />
                      <h5>Projects</h5>
                      <small>10+ Completed</small>
                    </article>
                  </div>
                </div>
                <p>Achievements are my main passion of my careers target, my mission is to add value to my entity and staff, the responsibility has been handed over to take the lead of my team.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
