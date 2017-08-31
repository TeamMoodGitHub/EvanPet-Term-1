import React, { Component } from 'react';
import _ from 'underscore';
import { database, auth } from './firebase';
import { 
    getSummonerByName, 
    getMatchesByPlayerName,
    getMatchDataById, 
} from './LeagueBackend';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            summonerName: '',
            password: '',
            confirmPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        // const summonerName = this.state.summonerName;
        // // Get the summoner data by their name
        // const summonerInfo = await getSummonerByName(summonerName);

        // // Get the most recent matches for the player
        // const recentMatches = await getMatchesByPlayerName(summonerName);
        // console.log("Recent Matches", recentMatches);

        // // For 1 match...
        // const singleGame = recentMatches.matches[0];
        // const matchData = await getMatchDataById(singleGame.gameId);
        // console.log("Single Match", matchData);

        // const playerStats = _(matchData.participants).filter((player) => {
        //     return player.championId === singleGame.champion;
        // })[0].stats;
        // const [wardsPlaced, kills, damageToChamps ] = [playerStats.wardsPlaced, playerStats.kills, playerStats.totalDamageDealtToChampions];
        
        // Save the stats we want to firebase (DB ref is on /users/) and create a new user
        // const email = this.state.email;
        // const password = this.state.password;
        // const summonerName = this.state.summonerName;
        // auth.createUserWithEmailAndPassword(email, password)
        //         .then((user) => {

        //             // Setting up the data for the user before they have confirmed their league account
        //             database.ref('/users/' + user.uid).set({
        //                 account: {
        //                     email,
        //                     summonerName,
        //                     isVerified: false,
        //                 },
        //             });
        //         })
        //         .catch(e => console.log(e.message));
        

        // // For each match...
        // const matchData = _(recentMatches.matches).map( async (matchObj, index) => {
        //     // Get matchdata by Id
        //     const match = await getMatchDataById(matchObj.gameId);
        //     console.log("match", match);
        //     // Parse the data we need from the response
        //     if(match) {
        //         const playerStats = _(match.participants).filter((player) => {
        //             return player.championId === matchObj.champion;
        //         });
        //         return playerStats.stats;
        //     }
        // });
        // console.log("Result: ", matchData);
        
    
            
     
            
        // For each match
            // Get matchdata by Id
            // parse the data we need from the response
            // save it for doing computations later
        // compute the avg's of the stats we parsed
        // save it to firebase

        // const email = this.state.email;
        // const summonerName = this.state.summonerName;
        // 
    }

    render() {
        return (
            <container>
                        <h2> Register </h2>
                        <div>
                            <input
                                type="text"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }); }}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Summoner Name"
                                value={this.state.summonerName}
                                onChange={(e) => { this.setState({ summonerName: e.target.value }); }}
                            /> 
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(e) => { this.setState({ password: e.target.value }); }}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password Confirm"
                                value={this.state.confirmPassword}
                                onChange={(e) => { this.setState({ confirmPassword: e.target.value }); }}
                            />
                        </div>
                 
                        <button
                            onClick={(e) => { this.handleSubmit(e); }}
                        >Register
                        </button>
            </container>
        );
    }
}

export default RegisterPage;