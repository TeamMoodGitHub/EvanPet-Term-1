import React from 'react';
import Routes from '../routes';
// import MainPage from './Main';
import LandingPage from './LandingPageComponents/Landing';
// import Leaderboard from './LeaderboardComponents/Leaderboard';
const App = () =>
    <div>
        <LandingPage />
        { Routes }
    </div>;

export default App;
