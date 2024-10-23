import React from 'react';
import './About.css';
import Button from './Button';
import jorts from './images/jorts.jpg';
import jean from './images/jean.jpg';
import maru from './images/maru.jpg';

function About({ setPage }) { 
  const cats = [
    {
      name: "Jorts",
      imageUrl: jorts,
      imageAlt: "white and brown long fur cat",
      description: "Dolor nulla repellendus quisquam optio in. In optio distinctio doloremque Ipsum lorem sit voluptate inventore."
    },
    {
      name: "Jean",
      imageUrl: jean,
      imageAlt: "orange and white cat on yellow surface",
      description: "Dolor nulla repellendus quisquam optio in. In optio distinctio doloremque"
    },
    {
      name: "Maru",
      imageUrl: maru,
      imageAlt: "brown and white tabby cat",
      description: "Dolor nulla repellendus quisquam optio in. In optio distinctio doloremque"
    }
  ];

  return (
    <main id="main-content">
      <section className="cats">
        {cats.map((cat, index) => (
          <article key={index} className="cat">
            <h2>{cat.name}</h2>
            <img src={cat.imageUrl} alt={cat.imageAlt} className="card-image" />
            <p>{cat.description}</p>
            <Button type="button" visual="link" onClick={() => setPage('Home')}>Go to Home</Button> 
          </article>
        ))}
      </section>
    </main>
  );
}

export default About;
