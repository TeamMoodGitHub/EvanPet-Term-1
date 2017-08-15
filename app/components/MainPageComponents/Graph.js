import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import _ from 'underscore';
import PropTypes from 'prop-types';

class GraphComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            data: [],
            willRedirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // When we press the submit button, we want to make a call to our API
        // to get the player data for the last 5 games
        console.log('inside fetch');
        fetch('/api/getSummonerData', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({ name: this.state.name })

        })
            .then(res => res.json())
            .then(playerMatchesInfo => {
                // Lets test out kills by putting the kills into a bar graph
                const data = [];

                _.each(playerMatchesInfo.playerDataArr.reverse(), (match) => {
                    data.push({
                        kills: match.stats.kills,
                        assists: match.stats.assists,
                        deaths: match.stats.deaths,
                        damageToChamps: match.stats.totalDamageDealtToChampions,
                        visionScore: match.stats.visionScore,
                        wardsPlaced: match.stats.wardsPlaced,
                        wardsKilled: match.stats.wardsKilled,

                    });
                });
                this.setState({ data, willRedirect: true });
            });
    }

    render() {
        if (this.state.willRedirect) {
            this.setState({
                willRedirect: false,
            });
            this.props.history.data = this.state.data;
            this.props.history.push('/');
            return (<Redirect to="/stats" />);
        }

        return (
            <div className="App">
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h2>Progress.gg</h2>
                </div>

                <div>
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Your Summoner Name"
                        onChange={(e) => {
                            this.setState({ name: e.target.value });
                        }
                        }
                    /> <br />
                    <button
                        onClick={this.handleSubmit}>
                        Generate Stats!
                    </button>
                    <img className="Landing-Background" src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-galio-update-2017/en_US/f554ef373e0e733bbe72addb2603447d72a4fec4/assets/img/wp-galio-base-logo.jpg" />

                </div>

            </div>
        );
    }
}

GraphComponent.propTypes = {
    history: PropTypes.array
};

export default GraphComponent;
