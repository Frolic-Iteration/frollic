import React from 'react';
import Sidebar from './Sidebar.jsx';
import ResultsContainer from './ResultsContainer.jsx';
import Login from './Login.jsx';

const MainContainer = () => {
    return (
        <section id="main-container">
            <Sidebar />
            <ResultsContainer />

        </section>
    )
}
export default MainContainer;