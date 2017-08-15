const data = [
    {
        visionScore: 1,
        wardsPlaced: 5,
        wardsKilled: 6,
    },
    {
        visionScore: 2,
        wardsPlaced: 8,
        wardsKilled: 3,
    },
    {
        visionScore: 10,
        wardsPlaced: 15,
        wardsKilled: 2,
    },
    {
        visionScore: 0,
        wardsPlaced: 2,
        wardsKilled: 3,
    }
];

const creator = (id, title) => ({
    id,
    title,
    data
});

const stat = (state = [], action) => {
    switch (action.type) {
        case 'ADD_STAT':
            return [...state, creator(action.id, action.title)];
        case 'REMOVE_STAT':
            return state.filter((singleStat) => singleStat.id !== action.id);
        case 'VIEW_STAT':
            return state;
        default:
            return state;
    }
};

export default stat;
