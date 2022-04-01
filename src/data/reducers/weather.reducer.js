import { 
    FETCH_WEATHER_REQUEST, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILURE 
} from "../actions/index.actions";

const intialState = {
    isLoading: null,
    data: {},
    error: null,
};

export const weatherReducer = (state = intialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_REQUEST: return ({
            ...state,
            isLoading: true,
        })
        case FETCH_WEATHER_SUCCESS: {
            // Below is the batch request response that consists of places, conditions, threats, and alerts data
            // Each category will have values that will be specifically used with most values removed for brevity
            // Places
            const { name, state } = action.payload.responses[0].response.place;
            // Conditions
            const {
                dewpointF,
                feelslikeF,
                humidity,
                pop,
                weatherPrimary,
                windDir,
                windSpeedMPH,
            } = action.payload.responses[1].response[0].periods[0];
            // Threats
            // const { storms } = action.payload.responses[2]?.response[0]?.periods[0];
            // Alerts
            // const { active, details } = action.payload.responses[3]?.response[0];

            const weatherData = {
                city: name, 
                state,
                dewpointF,
                feelslikeF,
                humidity,
                rainChance: pop,
                weatherPrimary,
                windDir,
                windSpeedMPH,
                // storms,
                // active, 
                // details,
            };

            return {
                ...state,
                isLoading: false,
                data: weatherData,
            }
        }
        case FETCH_WEATHER_FAILURE: return ({
            ...state,
            isLoading: false,
            error: action.payload,
        })
        default: return state
    }
};