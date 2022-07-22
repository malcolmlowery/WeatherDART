import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, RefreshControl } from 'react-native';
import styled from 'styled-components/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import BGGradient from '../components/BGGraident';
import BGBlur from '../components/BGBlur';
import Text from '../components/Text';
import { fetchWeatherConditions } from '../data/actions/weather.action';
import Button from '../components/Button';

const selectWeatherConditions = state => state.weatherConditions;

const HomeScreen = () => {
    const [zipcode, setZipcode] = useState(undefined);
    const dispatch = useDispatch();
    const {
        isLoading,
        data,
        error,
    } = useSelector(selectWeatherConditions);
    
    const fetchWeather = () => dispatch(fetchWeatherConditions('33064'));
    const handleSumbitZipcode = () => {
        return dispatch(fetchWeatherConditions(zipcode))
    }

    console.log(isLoading)

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
            {/* <Header>
                <Text fontSize={13} color='#4B4E68'>Logout</Text>
            </Header> */}
         
                <Content style={{ zIndex: 100 }} >
                    <CurrentWeatherContainer>
                        
                        <InputGroup>
                            <TextInput 
                                placeholder='Enter Zip Code...'
                                keyboardType='number-pad'
                                value={zipcode}
                                onChangeText={(val) => setZipcode(val)}
                            />
                            <InputButton onPress={() => handleSumbitZipcode(zipcode)}>
                                <Text fontSize={11}>Submit</Text>
                            </InputButton>
                        </InputGroup>
                        { isLoading === false ?
                            <>
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
                                    initialValue='N/A' 
                                    value='N/A'
                                />
                                <Text fontSize={16} fontWeight='500' marginTop={24}>Weather Stats</Text>
                                <WeatherStatsContainer>
                                <StatsItem>
                                        <Text fontSize={19}>Feels Like</Text>
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
                            </>
                            :
                            <Text fontSize={14}>Loading</Text>
                        }
                    
                    </CurrentWeatherContainer>
                </Content>
        </Container>
    )
};

export default HomeScreen;

const Container = styled.View`
    flex: 1;
`;

const Content = styled.View`
    padding-top: 40px;
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

const InputGroup = styled.View`
    flex-direction: row;
    margin-bottom: 28px;
`;

const TextInput = styled.TextInput`
    background-color: #313443;
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: rgb(239, 198, 26);
    font-weight: 600;
    padding: 8px;
    text-align: center;
    width: 200px;
`;

const InputButton = styled.TouchableOpacity`
    align-items: center;
    background-color: #2d95ff;
    border-radius: 30px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    justify-content: center;
    padding: 6px;
    width: 80px;
`;