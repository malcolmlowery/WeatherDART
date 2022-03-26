import React from 'react';
import { ScrollView } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styled from 'styled-components/native';
import Text from '../components/Text';
import BGGradient from '../components/BGGraident';
import BGBlur from '../components/BGBlur';

const HomeScreen = () => {
    return(
        <Container>
            <BGGradient />
            <BGBlur showBgImage={false} />
            <ScrollView style={{ zIndex: 100 }}>
                <Content>
                    <Header>
                        <Text fontSize={13} color='#4B4E68'>Logout</Text>
                    </Header>
                    <CurrentWeatherContainer>
                        <WeatherIcon source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_24-512.png' }} />
                        <Text fontSize={16} fontWeight='500' marginTop={24}>Currently</Text>
                        <Text color='#e43c63' fontSize={19} fontWeight='700' marginTop={11}>Heavy Thunderstorms</Text>
                        <Divider />
                        <Text color='#fff' fontSize={19} fontWeight='600' marginBottom={24}>Chance of Rain</Text>
                        <CircularProgress
                            activeStrokeColor='#4FB5CB'
                            maxValue={100} 
                            radius={60}
                            textColor='#fff'
                            value={92} 
                        />
                        <Text fontSize={16} fontWeight='500' marginTop={24}>Weather Stats</Text>
                        <WeatherStatsContainer>
                            <StatsItem>
                                <Text fontSize={19}>Temp</Text>
                                <Text fontSize={19}>84°</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Humidity</Text>
                                <Text fontSize={19}>77%</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Dewpoint</Text>
                                <Text fontSize={19}>61°</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Wind</Text>
                                <Text fontSize={19}>13 mph</Text>
                            </StatsItem>
                            <StatsItem>
                                <Text fontSize={19}>Wind Direction</Text>
                                <Text fontSize={19}>SSW</Text>
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
    width: 300px;
    margin: 24px 0;
`;

const WeatherStatsContainer = styled.View`
    margin-top: 24px;
    min-width: 250px;
`;

const StatsItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;