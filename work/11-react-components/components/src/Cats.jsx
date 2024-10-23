import React from 'react';
import './Cats.css';
import cat1 from './images/cat1.jpg';
import cat2 from './images/cat2.jpg';

function Cats() {
  return (
    <main id="main-content">
      <section className="section">
        <img src={cat1} alt="silver tabby cat" className="image-right" />
        <h2>Long time Internet Subjects</h2>
        <p>
          Dive into the mysterious world of cats, experience their elegance and independence, and get close to these fascinating creatures with us.
          Dive into the mysterious world of cats, experience their elegance and independence, and get close to these fascinating creatures with us.
        </p>
      </section>
      <section className="section">
        <img src={cat2} alt="a cat sleeping on top of a white chair" className="image-left" />
        <h2>Long Time Internet Kings</h2>
        <p>
          Every cat deserves a warm home. Check out the cats waiting for their forever home and continue the chain of love.
          Dive into the mysterious world of cats, experience their elegance and independence, and get close to these fascinating creatures with us.
          Dive into the mysterious world of cats, experience their elegance and independence, and get close to these fascinating creatures with us.
        </p>
      </section>
    </main>
  );
}

export default Cats;
