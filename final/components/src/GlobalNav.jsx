import React, { useState } from 'react';
import './GlobalNav.css';

const menu = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Cats",
        path: "/cats.html",
    },
    {
        name: "Adoption",
        path: "/adoption.html",
    },
];

function GlobalNav({ className, setPage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const listHtml = menu.map(item => (
        <li key={item.name} className='global-nav__item'>
            <a
                className='global-nav__link'
                href={item.path}
                onClick={(e) => {
                    e.preventDefault();
                    setPage(item.name);
                    setIsMenuOpen(false);
                }}
            >
                {item.name}
            </a>
        </li>
    ));

    return (
        <nav className={`global-nav ${className}`}>
            <div className="global-nav__menu-icon" onClick={toggleMenu}>
                &#9776; 
            </div>
            <ul className={`global-nav__list ${isMenuOpen ? 'expanded' : ''}`}>
                {listHtml}
            </ul>
        </nav>
    );
}

export default GlobalNav;
