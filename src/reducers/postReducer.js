import { FETCH_POSTS } from '../actions/postActions';

const postInitialState = {};
const post = (state = postInitialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('PAYLOAD: ', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default post;
