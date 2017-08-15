import _ from 'underscore';

const data = [
    {
        name: 'vi bot',
        avgWardsPerGame: 20,
        avgKillsPerGame: 5,
        avgKpPerGame: 70,
    },
    {
        name: 'dr thicc',
        avgWardsPerGame: 25,
        avgKillsPerGame: 10,
        avgKpPerGame: 60,
    },
    {
        name: 'deblao',
        avgWardsPerGame: 10,
        avgKillsPerGame: 15,
        avgKpPerGame: 40,
    },
];

export const sortedWardData = _(data).sortBy((obj) => {
    return obj.avgWardsPerGame;
}).reverse();


export const sortedKillData = _(data).sortBy((obj) => {
    return obj.avgKillsPerGame;
}).reverse();


export const sortedKpData = _(data).sortBy((obj) => {
    return obj.avgKpPerGame;
}).reverse();

