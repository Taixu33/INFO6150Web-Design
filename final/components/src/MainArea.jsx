// MainArea.jsx
import React from 'react';
import Home from './Home';
import Cats from './Cats';
import Adoption from './Adoption';
import PrivacyPolicy from './PrivacyPolicy';  

function MainArea({ page, setPage }) {
    return(
        <main>
            {page === 'Home' && <Home />}
            {page === 'Cats' && <Cats setPage={setPage} />}
            {page === 'Adoption' && <Adoption />}
            {page === 'PrivacyPolicy' && <PrivacyPolicy />}
        </main>
    );
}

export default MainArea;
