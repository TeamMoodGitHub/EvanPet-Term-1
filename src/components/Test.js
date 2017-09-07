import React, { Component } from 'react';
import { dataFetcher } from './LeagueBackend';
class Test extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async handleSubmit(e) {
        e.preventDefault();
        console.log('Testing!');
        const summonerName = 'vibot';
        const summonerData = await dataFetcher(summonerName);
        console.log('data: ', summonerData);
    }

    render() {
        return (
            <div>
                <container>
                    <h3> Test API </h3>
                    <button onClick={(e) => { this.handleSubmit(e); }}>Test!</button>
                </container>
            </div>
        );
    }
}

export default Test;
