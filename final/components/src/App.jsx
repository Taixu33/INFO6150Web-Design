// App.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainArea from './MainArea';

function App() {
    const [page, setPage] = useState('Home');

    return (
        <div className="app">
            <Header setPage={setPage} />
            <MainArea page={page} setPage={setPage} />
            <Footer setPage={setPage} />
        </div>
    );
}

export default App;
