import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import MainPage from './components/MainPageComponents/Main';
// import StatsPage from './components/MainPageComponents/Stats';
// import LoginPage from './components/VerificationComponents/Login';
import RegisterPage from './components/VerificationComponents/Login';
import Leaderboard from './components/LeaderboardComponents/Leaderboard';
// import LandingPage from './components/LandingPageComponents/Landing';

export default (
    <Switch>
        {/* <Route exact path="/" component={<h3>Landing page!</h3>} /> */}
        {/* <Route exact path="/login" component={LoginPage} /> */}
        {/* <Route exact path="/register" component={RegisterPage} /> */}
         <Route exact path="/leaderboard" component={Leaderboard} /> 
    </Switch>
);