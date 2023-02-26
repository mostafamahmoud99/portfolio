import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi'

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto my-2">
            <article className='services'>
              <div className="service__head">
                <h3>UI/UX Design</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Easy to use the website</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>make the user enjoy his time while using it</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>The process of designing products or services with the interests and needs of users</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>The full experience from a user's first contact to the last</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Visual touchpoints that allow users to interact with a product</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Physical and digital products</p>
                </li>
              </ul>
            </article>
          </div>
          <div className="col-md-4 mx-auto my-2">
            <article className='services'>
              <div className="service__head">
                <h3>Frontend</h3>
              </div>
              <ul className="service__list">
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Develop the part that the average user interacts with.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Make websites with Html, css, javascript for bulid the website.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Make websites with responsive page for all devices</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Build website with react.js</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Dealing with server and api</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Add actions to the websites</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
