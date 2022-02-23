import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

// Components
import Text from '../components/Text';
import Button from '../components/Button';
import BGGradient from '../components/BGGraident';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const GettingStartedScreen = () => {
    return(
        <Container>
            <BGGradient />

            <BlurView style={{ position: 'absolute', height: screenHeight, width: screenWidth, zIndex: 3 }} intensity={100} tint='dark' />
            <BGImg style={{ top: 180, left: 70 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_12-512.png' }} />
            <BGImg style={{ top: 180, right: 70 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Sunny-512.png' }} />

            <Content style={{ position: 'relative', zIndex: 6 }}>
                <Img style={{ marginBottom: 75}} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_25-512.png' }} />
                
                <TextContainer style={{ marginBottom: 30}}>
                    <Text color='white' fontSize={28} marginBottom={1}>Discover the Weather</Text>
                    <Text color='white' fontSize={28}>in Your City</Text>
                </TextContainer>
                
                <TextContainer>
                    <Text color='#d4d6da' fontSize={14} fontWeight={400} marginBottom={6}>Get to know your weather maps and</Text>
                    <Text color='#d4d6da' fontSize={14} fontWeight={400}>radar percipitation forecast</Text>
                </TextContainer>

                <Button marginTop={80}>Get Started</Button>
            </Content>
        </Container>
    )
};

export default GettingStartedScreen;

const Container = styled.View`
    display: flex;
    flex: 1;
`;

const BGImg = styled.Image`
    align-self: center;
    height: 175px;
    position: absolute;
    width: 175px;
    z-index: 2;
`;

const Content = styled.View`
    align-items: center;
    flex: 1;
    justify-content: center;
    margin: 140px 40px;
`;

const Img = styled.Image`
    height: 175px;
    width: 175px;
`;

const TextContainer = styled.View`
    align-items: center;
    justify-content: center;
`;