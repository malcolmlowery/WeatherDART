import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './p_styles/dashboard.page.css';
import { WeatherDataContext } from '../context/WeatherDataContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { observationsData } = useContext(WeatherDataContext);
  const { place, ob } = observationsData;

  const city_state_name =
    place &&
    place?.city.charAt(0).toUpperCase() +
      place?.city.slice(1) +
      ', ' +
      place?.state.toUpperCase();

  return (
    <div className='dashboard'>
      <h1>Hello!</h1>
      <p>Signed in with email: {user?.email}</p>
      {ob && (
        <p>
          The temperature in {city_state_name} is {ob?.tempF}°{' '}
          {ob?.feelslikeF !== ob?.tempF && 'but feels like '}
          {ob?.feelslikeF !== ob?.tempF && ob?.feelslikeF + '°'} ⛅️
        </p>
      )}
    </div>
  );
};

export default Dashboard;
