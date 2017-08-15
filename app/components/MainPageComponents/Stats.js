import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, Legend, Tooltip } from 'recharts';
import * as firebase from 'firebase';
import _ from 'underscore';

class StatsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentWillMount() {
        const firebaseUser = firebase.auth().currentUser;
        if(!firebaseUser) {
            this.props.history.push('/login');
            return;
        }

        const dbUserRef = firebase.database()
            .ref('/users/' + firebaseUser.uid + '/data/matches');
        dbUserRef.once('value', (data) => {
            const dataObj = data.val();
            const tempData = [];
            // this.setState({
            //   data: dataObj.playerDataArr
            // })
            _.each(dataObj.playerDataArr.reverse(), (match) => {
                tempData.push({
                    kills: match.stats.kills,
                    assists: match.stats.assists,
                    deaths: match.stats.deaths,
                    damageToChamps: match.stats.totalDamageDealtToChampions,
                    visionScore: match.stats.visionScore,
                    wardsPlaced: match.stats.wardsPlaced,
                    wardsKilled: match.stats.wardsKilled,

                });
            });
            this.setState({data: tempData});
        });
    }

    render() {
        console.log('Graph state: ', this.state.data);
        return (
            <div >
                <div className="Stats">
                    <LineChart width={400} height={400} data={this.state.data}>
                        <Line type="monotone" dataKey="wardsPlaced" stroke="#1b11d8" />
                        <Line type="monotone" dataKey="sightWardsBoughtInGame" stroke="#c411d8" />
                        <Tooltip/>
                        <Legend />
                    </LineChart>

                </div>
            </div>
        );
    }
}

StatsComponent.propTypes = {
    history: PropTypes.array
};

export default StatsComponent;
