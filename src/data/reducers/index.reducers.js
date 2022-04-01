import { combineReducers } from 'redux';
import { weatherReducer } from './weather.reducer';

const rootReducer = combineReducers({
    weatherConditions: weatherReducer,
});

export default rootReducer;