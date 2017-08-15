

const leaderboardInitialState = [];

const leaderboard = (state = leaderboardInitialState, action) => {
    switch (action.type) {
        case 'ADD_SUMMONER':
            return state.concat({
                summonerName: action.summonerName,
                avgWardsPerGame: action.avgWardsPerGame,
                avgKillsPerGame: action.avgKillsPerGame,
                avgKpPerGame: action.avgKpPerGame,
            });
        case 'REMOVE_SUMMONER':
            return state.filter((summoner) => summoner.summonerName !== action.summonerName);
        default:
            return state;
    }
};

export default leaderboard;
