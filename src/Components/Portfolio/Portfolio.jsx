import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/Capture.PNG';
import IMG2 from '../../assets/note.PNG';
import IMG3 from '../../assets/shopping.PNG';
import IMG4 from '../../assets/weather.PNG';
import IMG5 from '../../assets/crud.PNG';
import IMG6 from '../../assets/food.PNG';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movies App By React',
    github: 'https://github.com/mostafamahmoud99/movie.git',
    demo: 'https://mostafamahmoud99.github.io/movie/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sticky Note By React',
    github: 'https://github.com/mostafamahmoud99/sticky_notes.git',
    demo: 'https://mostafamahmoud99.github.io/sticky_notes/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Shopping Cart',
    github: 'https://github.com/mostafamahmoud99/shopping-cart.git',
    demo: 'https://mostafamahmoud99.github.io/shopping-cart/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Weather App',
    github: 'https://github.com/mostafamahmoud99/Weather-App.git',
    demo: 'https://mostafamahmoud99.github.io/Weather-App/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crud system',
    github: 'https://github.com/mostafamahmoud99/Crud-system.git',
    demo: 'https://mostafamahmoud99.github.io/Crud-system/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Food',
    github: 'https://github.com/mostafamahmoud99/organic-food.git',
    demo: 'https://mostafamahmoud99.github.io/organic-food/'
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container">
        <div className="row">
          {data.map((ele) => <div key={ele.id} className="col-md-4 my-2">
            <article class='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={ele.image} alt={ele.title} className='w-100' />
              </div>
              <h3>{ele.title}</h3>
              <a href={ele.github} className='btn' target='_blank'>Github</a>
              <a href={ele.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
          </div>)}
        </div>
      </div>
    </section>
  )
}
