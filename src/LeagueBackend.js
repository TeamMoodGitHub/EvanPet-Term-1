// This file exports helper functions to abstract away API calls from our react components
import math from 'mathjs';
import _ from 'underscore';

const api = 'http://localhost:8080/api';                        // This is the start of the link for our server!

export const getSummonerByName = (summonerName) => {
    return fetch(`${api}/getSummonerByName/${summonerName}`)
        .then((response) => response.json())
        .catch(err => err);
};

export const getMatchDataByMatchId = (matchId) => {
    return fetch(`${api}/getMatchDataByMatchId/${matchId}`)
        .then((response) => response.json())
        .catch(err => err);
};

export const getRecentRankedGamesBySummonerId = (summonerId) => {
    console.log("id in function", summonerId)
    return fetch(`${api}/getRecentRankedGamesBySummonerId/${summonerId}`)
        .then((response) => response.json())
        .catch(err => err);
};

export const getRunePagesBySummonerId = (summonerId) => {
    return fetch(`${api}/getRunePagesBySummonerId/${summonerId}`)
        .then((response) => response.json())
        .catch(err => err);
};

export const dataFetcher = async (summonerName) => {
    // // Get the summoner data by their name

    // Get the most recent matches for the player
    const summonerInfo = await getSummonerByName(summonerName);
    const summonerId = summonerInfo.accountId;
    let recentRankedGames;
    if(summonerId) {
        recentRankedGames = await getRecentRankedGamesBySummonerId(summonerId);

    }
    if(recentRankedGames.matches) {

    // this will have an array of objs that will contain different stats
    const allMatchData = await Promise.all(_(recentRankedGames.matches).map(async (singleGame) => {
        if(singleGame) {
            // Get a single match by match id
            const singleMatchData = await getMatchDataByMatchId(singleGame.gameId);
            // Get player stats we want from the 1 game they played
            if(singleMatchData) {
                const playerStats = _(singleMatchData.participants).filter((player) => {
                    return player.championId === singleGame.champion;
                })[0].stats;
                return {kills: playerStats.kills, deaths: playerStats.deaths, assists: playerStats.assists};
            }
        }
    }));
    const statsObj = {
        kills: math.round(getAvgOfData(allMatchData, 'kills')),
        deaths: math.round(getAvgOfData(allMatchData, 'deaths')),
        assists: math.round(getAvgOfData(allMatchData, 'assists')),
    }
    console.log("End Stats: ", statsObj);
    return statsObj;
    }
};

/**
 * This function will take an array of data and return the avg
 * @param {array} dataCollection 
 */
const getAvgOfData = (dataList, key) => {
    
    let numElements = 0;
    let sum = 0;
    _(dataList).each((dataObj) => {
        if(dataObj) {
            numElements += 1;
            sum += dataObj[key];
        }
        
    });
    console.log("Sum: ", sum);
    return (sum / numElements);
}