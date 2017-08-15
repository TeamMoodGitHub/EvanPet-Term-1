import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import statReducer from './statReducer';
import leaderboardReducer from './leaderboardReducer';
const rootReducer = combineReducers({
    statReducer,
    leaderboardReducer,
    form,
    routing
});

export default rootReducer;
