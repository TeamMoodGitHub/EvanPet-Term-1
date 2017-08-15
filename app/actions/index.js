import * as types from './types';

/**
 * Stat list actions
 */

export const addStat = (id, title = 'No title') => {
    return {
        type: types.ADD_STAT,
        title,
        id,
    };
};

export const removeStat = (id) => {
    return {
        type: types.REMOVE_STAT,
        id,
    };
};

export const viewStat = (title) => {
    return {
        type: types.VIEW_STAT,
        title,
    };
};

/**
 * Leaderboard actions
 */

export const addSummoner = (summonerName) => {
    return {
        type: types.ADD_SUMMONER,
        summonerName,
        avgWardsPerGame: 20,
        avgKillsPerGame: 5,
        avgKpPerGame: 70,
    };
};

export const removeSummoner = (summonerName) => {
    return {
        type: types.REMOVE_SUMMONER,
        summonerName,
    };
};


