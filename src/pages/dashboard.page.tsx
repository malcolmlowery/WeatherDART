import { useContext } from 'react';
import './p_styles/dashboard.page.css';
import { WeatherDataContext } from '../context/WeatherDataContext';

const Dashboard = () => {
  const { isLoadingMapContent, observationsData, map } =
    useContext(WeatherDataContext);
  const { place, ob } = observationsData;
  console.log(map);
  const city_state_name =
    place &&
    place?.city.charAt(0).toUpperCase() +
      place?.city.slice(1) +
      ', ' +
      place?.state.toUpperCase();

  console.log(map);

  return (
    <div className='dashboard'>
      {isLoadingMapContent && <h3>Please wait...</h3>}
      {!isLoadingMapContent && (
        <div className='dashboard__current-weather'>
          <img src={map} />
          {ob && (
            <div className='dashboard__current-weather__stats'>
              <p>
                The temperature in {city_state_name} is {ob?.tempF}°{' '}
                {ob?.feelslikeF !== ob?.tempF &&
                  'but feels like ' + ob?.feelslikeF + '°'}{' '}
                ⛅️
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
