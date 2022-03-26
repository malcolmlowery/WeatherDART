import React from 'react';
import styled from 'styled-components/native';
import Text from '../components/Text';
import BGGradient from '../components/BGGraident';
import BGBlur from '../components/BGBlur';

const HomeScreen = () => {
    return(
        <Container>
            <BGGradient />
            <BGBlur showBgImage={false} />
            <Content>
                <Header>
                    <Text fontSize={13} color='#4B4E68'>Logout</Text>
                </Header>
                <CurrentWeatherContainer>
                    <WeatherIcon source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_24-512.png' }} />
                    <Text fontSize={16} fontWeight='500' marginTop={24}>Currently</Text>
                    <Text color='#fff' fontSize={19} fontWeight='700' marginTop={11}>Heavy Thunderstorms</Text>
                    <Divider />
                    <Text color='#fff' fontSize={19} fontWeight='600'>Chance of Rain</Text>
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
    z-index: 100;
`;

const Header = styled.View`
    margin-top: 60px;
    margin-left: 20px;
`;

const CurrentWeatherContainer = styled.View`
    align-items: center;
    margin-top: 56px;
`;

const WeatherIcon = styled.Image`
    height: 146px;
    width: 146px;
`;

const Divider = styled.View`
    align-self: center;
    background-color: #e43c63;
    border-radius: 3px;
    height: 3px;
    width: 300px;
    margin: 24px 0;
`;