import React from 'react';
import Home from './Home';
import About from './About';
import Cats from './Cats';

function MainArea({ page, setPage }) {
    return(
        <main>
            {page === 'Home' && <Home />}
            {page === 'About' && <About setPage={setPage} />}
            {page === 'Cats' && <Cats />}
        </main>
    );
}

export default MainArea;
