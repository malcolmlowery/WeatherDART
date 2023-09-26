import { createContext, ReactNode, useState } from 'react';
import AerisWeather from '@aerisweather/javascript-sdk';
import { ObservationDataI } from '../types/weather-observations-data.interface';

const aeris = new AerisWeather(
  import.meta.env.VITE_AERIS_WEATHER_ID,
  import.meta.env.VITE_AERIS_WEATHER_SECRET,
);

interface PropsI {
  children: ReactNode;
}

interface WeatherDataContextI {
  fetchWeatherObervationsData: (a: string) => Promise<void>;
  observationsData: Partial<ObservationDataI>;
}

const WeatherDataContext = createContext<WeatherDataContextI>(
  {} as WeatherDataContextI,
);

const WeatherDataProvider = ({ children }: PropsI) => {
  const [observationsData, setObservationData] = useState<
    ObservationDataI | object
  >({});

  const fetchWeatherObervationsData = async (text: string) => {
    aeris
      .api()
      .endpoint('observations')
      .place(text)
      .get()
      .then(({ data, error }) => {
        if (error) {
          return new Error(
            'An error performing your request. Please try again',
          );
        }
        setObservationData(data);
      })
      .catch((error) => console.log(error));
  };

  const values = {
    fetchWeatherObervationsData,
    observationsData,
  };

  return (
    <WeatherDataContext.Provider value={values}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export { WeatherDataProvider, WeatherDataContext };
