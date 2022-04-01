import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, RefreshControl } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styled from 'styled-components/native';
import BGGradient from '../components/BGGraident';
import BGBlur from '../components/BGBlur';
import Text from '../components/Text';
import { useEffect } from 'react';
import { fetchWeatherConditions } from '../data/actions/weather.action';

const selectWeatherConditions = state => state.weatherConditions;

const HomeScreen = () => {
    const dispatch = useDispatch();

    const fetchWeather = () => dispatch(fetchWeatherConditions(33064));
    const {
        isLoading,
        data,
        error,
    } = useSelector(selectWeatherConditions)
    
    const {
        city, 
        state,
        dewpointF,
        feelslikeF,
        humidity,
        rainChance,
        weatherPrimary,
        windDir,
        windSpeedMPH,
    } = data;
 
    useEffect(() => {
        fetchWeather()
    },[]);

    return(
        <Container>
            <BGGradient />
            <BGBlur showBgImage={false} />
            <Header>
                <Text fontSize={13} color='#4B4E68'>Logout</Text>
            </Header>
            <ScrollView 
                style={{ zIndex: 100 }} 
                contentInset={{ top: 60 }} 
                refreshControl={
                    <RefreshControl title='Fetching Forcecast...' titleColor={'aliceblue'} tintColor={'aliceblue'} refreshing={isLoading} onRefresh={() => fetchWeather()} /> 
                }>
                <Content>
                    <CurrentWeatherContainer>
                        <WeatherIcon source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_24-512.png' }} />
                        <Text fontSize={16} fontWeight='500' marginTop={24}>{city}, {state}</Text>
                        <Text color='#e43c63' fontSize={19} fontWeight='700' marginTop={11}>{weatherPrimary}</Text>
                        <Divider />
                        <Text color='#fff' fontSize={19} fontWeight='600' marginBottom={24}>Chance of Rain</Text>
                        <CircularProgress
                            activeStrokeColor='#4FB5CB'
                            maxValue={100} 
                            radius={60}
                            textColor='#fff'
                            value={rainChance} 
                        />
                        <Text fontSize={16} fontWeight='500' marginTop={24}>Weather Stats</Text>
                        <WeatherStatsContainer>
                            <StatsItem>
                                <Text fontSize={19}>Temp</Text>
                                <Text fontSize={19}>{feelslikeF}°</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Humidity</Text>
                                <Text fontSize={19}>{humidity}%</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Dewpoint</Text>
                                <Text fontSize={19}>{dewpointF}°</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Wind</Text>
                                <Text fontSize={19}>{windSpeedMPH} mph</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Wind Direction</Text>
                                <Text fontSize={19}>{windDir}</Text>
                            </StatsItem>
                        </WeatherStatsContainer>
                    </CurrentWeatherContainer>
                </Content>
            </ScrollView>
        </Container>
    )
};

export default HomeScreen;

const Container = styled.View`
    flex: 1;
`;

const Content = styled.View`
    z-index: 100;
`;

const Header = styled.View`
    margin-top: 60px;
    margin-left: 20px;
    position: absolute;
    z-index: 1000;
`;

const CurrentWeatherContainer = styled.View`
    align-items: center;
    margin-top: 34px;
`;

const WeatherIcon = styled.Image`
    height: 146px;
    width: 146px;
`;

const Divider = styled.View`
    align-self: center;
    background-color: #fff;
    border-radius: 3px;
    height: 3px;
    margin: 24px 0;
    width: 300px;
`;

const WeatherStatsContainer = styled.View`
    margin-top: 24px;
    min-width: 250px;
    max-width: 300px;
`;

const StatsItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;