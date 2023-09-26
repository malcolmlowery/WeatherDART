import { useContext } from 'react';
import './p_styles/dashboard.page.css';
import { WeatherDataContext } from '../context/WeatherDataContext';

const Dashboard = () => {
  const { isLoadingMapContent, observationsData, map } =
    useContext(WeatherDataContext);
  const { place, ob } = observationsData;

  const city_state_name =
    place &&
    place?.city.charAt(0).toUpperCase() +
      place?.city.slice(1) +
      ', ' +
      place?.state.toUpperCase();

  return (
    <div className='dashboard'>
      {isLoadingMapContent && <h3>Please wait...</h3>}
      {!isLoadingMapContent && (
        <div className='dashboard__current-weather'>
          <img src={map} />
          {ob && (
            <div className='dashboard__current-weather__stats'>
              <div className='dashboard__current-weather__stats__header'>
                <h3 className='dashboard__current-weather__stats__header__city-state-name'>
                  {city_state_name}
                </h3>
                <h2 className='dashboard__current-weather__stats__header__temp'>
                  Currenly {ob.tempF}°
                </h2>
              </div>

              <h2 className='dashboard__current-weather__stats__condition-outside'>
                {ob.weather}
              </h2>

              <div className='dashboard__current-weather__stats__details'>
                <div className='dashboard__current-weather__stats__details__left-side'>
                  <p>
                    feels like: <b>{ob.feelslikeF}</b>
                  </p>
                  <p>
                    humidity: <b>{ob.humidity}%</b>
                  </p>
                  <p>
                    visibilty: <b>{ob.visibilityMI}%</b>
                  </p>
                  <p>
                    wind speed: <b>{ob.windMPH}mph</b>
                  </p>
                  <p>
                    wind direction: <b>{ob.windDir}</b>
                  </p>
                </div>
                <div className='dashboard__current-weather__stats__details__right-side'>
                  <p>
                    feels like: <b>{ob.feelslikeF}</b>
                  </p>
                  <p>
                    humidity: <b>{ob.humidity}%</b>
                  </p>
                  <p>
                    visibilty: <b>{ob.visibilityMI}%</b>
                  </p>
                  <p>
                    wind speed: <b>{ob.windMPH}mph</b>
                  </p>
                  <p>
                    wind direction: <b>{ob.windDir}</b>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
