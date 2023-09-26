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
  map: string | undefined;
  isLoadingMapContent: boolean;
}

const WeatherDataContext = createContext<WeatherDataContextI>(
  {} as WeatherDataContextI,
);

const WeatherDataProvider = ({ children }: PropsI) => {
  const [isLoadingMapContent, setIsLoadingMapContent] = useState(false);
  const [map, setMap] = useState<string>();
  const [observationsData, setObservationData] = useState<
    ObservationDataI | object
  >({});

  const fetchWeatherObervationsData = async (input: string) => {
    setIsLoadingMapContent(true);
    try {
      aeris
        .api()
        .endpoint('observations')
        .place(input)
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

      const aeris_map = aeris.map();
      aeris_map.layers(
        'stormcells,satellite-visible,radar,counties,admin-cities,roads',
      );
      aeris_map.center(input).zoom(8);
      aeris_map.size(500, 500);

      aeris_map
        .get()
        .then((result) => {
          if (result.error) {
            return new Error(
              'An error performing your request. Please try again',
            );
          }
          setMap(result.image.src);
          setIsLoadingMapContent(false);
        })
        .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  };

  const values = {
    fetchWeatherObervationsData,
    observationsData,
    map,
    isLoadingMapContent,
  };

  return (
    <WeatherDataContext.Provider value={values}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export { WeatherDataProvider, WeatherDataContext };
