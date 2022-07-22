import { AERIS_API_ID, AERIS_API_SECRET } from '@env'; 
import { 
    FETCH_WEATHER_REQUEST, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILURE 
} from "./index.actions";


const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_REQUEST
});

const fetchWeatherSuccess = data => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: data
});

const fetchWeatherFailure = data => ({
    type: FETCH_WEATHER_FAILURE,
    payload: data
});

export const fetchWeatherConditions = zipcode => {
    return async dispatch => {
        dispatch(fetchWeatherRequest())
        await fetch(`https://api.aerisapi.com/batch/${zipcode}?requests=/places,/conditions,/threats,/alerts,/&client_id=${AERIS_API_ID}&client_secret=${AERIS_API_SECRET}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return dispatch(fetchWeatherSuccess(data.response))
            })
            .catch(error => dispatch(fetchWeatherFailure(error)))
    }
};