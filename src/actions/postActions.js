import { database } from '../firebase';
export const FETCH_POSTS = 'FETCH_POSTS';

export const getPosts = () => {
    return dispatch => {
        database.on('value', data => {
            dispatch({
                type: FETCH_POSTS,
                payload: data.val(),
            })
        })
    }
}

export const savePost = (values) => {
    return dispatch => database.push(values);
}

export const updatePost = (id, newData) => {
    let updates = {};
    updates[`stats`] = newData;
    return dispatch => database.child(id).update(updates);
};

export const deletePost = (id) => {
    console.log("Id in action" ,id)
    return dispatch => database.child(id).remove();
};

export const updateSelector = (selector) => {
    let updates = {};
    updates[`selector`] = selector;
    return dispatch => database.update(updates);
};

// Write the new post's data simultaneously in the posts list and the user's post list.
// var updates = {};
// updates['/posts/' + newPostKey] = postData;
// updates['/user-posts/' + uid + '/' + newPostKey] = postData;

// return firebase.database().ref().update(updates);


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