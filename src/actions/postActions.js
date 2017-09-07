import { database } from '../firebase';
export const FETCH_POSTS = 'FETCH_POSTS';

/**
 * Listener for when our DB changes.  When it does, we dispatch an action to get the posts
 */
export const getSummoners = () => {
    return dispatch => {
        database.on('value', data => {
            dispatch({
                type: FETCH_POSTS,
                payload: data.val(),
            });
        });
    };
};

/**
 * This function saves the passed in value to our DB
 * @param {*} values 
 */
export const savePost = (values) => {
    return () => database.push(values);
};

/**
 * This function updates the summoner data by making new requests to the Riot API.
 * As of right now, this function is very expensive.
 * @todo make sure we are only fetching the avg of the last 10 games played.
 * @param {*} id 
 * @param {*} newData 
 */
export const updatePost = (id, newData) => {
    const updates = {};
    updates.stats = newData;
    return () => database.child(id).update(updates);
};

/**
 * This function deletes a summoner from our database
 * @param {*} id 
 */
export const deletePost = (id) => {
    return () => database.child(id).remove();
};

/**
 * This function updates the selector in our database, depending on what the 
 * user wants to sort the leaderboard by.  Currently they can sort by kills, assists, deaths.
 * @param {*} selector 
 */
export const updateSelector = (selector) => {
    const updates = {};
    updates.selector = selector;
    return () => database.update(updates);
};
