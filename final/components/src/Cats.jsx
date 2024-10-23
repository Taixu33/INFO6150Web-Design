import React, { useState } from 'react';
import './Cats.css';
import siamese1 from './images/siamese1.jpg';
import siamese2 from './images/siamese2.jpg';
import siamese3 from './images/siamese3.jpg';
import persian1 from './images/persian1.jpg';
import persian2 from './images/persian2.jpg';
import persian3 from './images/persian3.jpg';
import maineCoon1 from './images/maineCoon1.jpg';
import maineCoon2 from './images/maineCoon2.jpg';
import maineCoon3 from './images/maineCoon3.jpg';

function Cats() {
  const initialCats = [
    { name: "Bella", imageUrl: siamese1, imageAlt: "brown siamese kitten", age: 1, gender: "Female", breed: "Siamese" },
    { name: "Simba", imageUrl: persian1, imageAlt: "white persian cat on green grass during daytime", age: 1, gender: "Male", breed: "Persian" },
    { name: "Luna", imageUrl: maineCoon1, imageAlt: "white cat in close up photography", age: 3, gender: "Female", breed: "Maine Coon" },
    { name: "Max", imageUrl: persian2, imageAlt: "short haired black and white cat", age: 2, gender: "Male", breed: "Persian" },
    { name: "Chloe", imageUrl: maineCoon2, imageAlt: "a cat laying in the grass next to a bush God", age: 2, gender: "Male", breed: "Maine Coon" },
    { name: "Oliver", imageUrl: siamese2, imageAlt: "short fur white kitten on black basket", age: 1, gender: "Female", breed: "Siamese" },
    { name: "Lucy", imageUrl: maineCoon3, imageAlt: "a cat laying on top of a cat tree", age: 2, gender: "Female", breed: "Maine Coon" },
    { name: "Charlie", imageUrl: persian3, imageAlt: "orange tabby cat in tilt shift lens", age: 3, gender: "Male", breed: "Persian" },
    { name: "Lily", imageUrl: siamese3, imageAlt: "a siamese cat with blue eyes laying on a bed", age: 2, gender: "Female", breed: "Siamese" }
  ];

  const [cats] = useState(initialCats);
  const [filters, setFilters] = useState({ age: '', gender: '', breed: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({ ...prevFilters, [name]: value }));
  };

  const filteredCats = cats.filter(cat => 
    (filters.age ? cat.age.toString() === filters.age : true) &&
    (filters.gender ? cat.gender === filters.gender : true) &&
    (filters.breed ? cat.breed === filters.breed : true)
  );

  return (
    <main id="main-content">
      <a href="#filter-section" className="skip-link">Skip to main content</a>  
      <section className="filter-section" id="filter-section">
        <select name="age" onChange={handleFilterChange} value={filters.age}>
          <option value="">All Ages</option>
          <option value="1">1 Year</option>
          <option value="2">2 Years</option>
          <option value="3">3 Years</option>
        </select>
        <select name="gender" onChange={handleFilterChange} value={filters.gender}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="breed" onChange={handleFilterChange} value={filters.breed}>
          <option value="">All Breeds</option>
          <option value="Siamese">Siamese</option>
          <option value="Persian">Persian</option>
          <option value="Maine Coon">Maine Coon</option>
        </select>
      </section>
      <section className="cats">
        {filteredCats.map((cat, index) => (
          <article key={index} className="cat">
            <img src={cat.imageUrl} alt={cat.imageAlt} className="card-image" />
            <h2>{cat.name}</h2>
            <p>Age: {cat.age}</p>
            <p>Gender: {cat.gender}</p>
            <p>Breed: {cat.breed}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Cats;
