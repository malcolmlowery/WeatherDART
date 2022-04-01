import styled from 'styled-components/native';

// Components
import Text from '../components/Text';
import Button from '../components/Button';
import BGGradient from '../components/BGGraident';
import BGBlur from '../components/BGBlur';

const GettingStartedScreen = ({ navigation }) => {
    return(
        <Container>
            <BGGradient />
            <BGBlur />

            <Content style={{ position: 'relative', zIndex: 6 }}>
                <Text color='white' fontSize={32} marginBottom={20}>WeatherDART</Text>
                <Img style={{ marginBottom: 75}} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_25-512.png' }} />
                
                <TextContainer style={{ marginBottom: 30}}>
                    <Text color='white' fontSize={28} marginBottom={1}>Discover the Weather</Text>
                    <Text color='white' fontSize={28}>in Your City</Text>
                </TextContainer>
                
                <TextContainer>
                    <Text color='#d4d6da' fontSize={14} fontWeight={400} marginBottom={6}>Get to know your weather maps and</Text>
                    <Text color='#d4d6da' fontSize={14} fontWeight={400}>radar percipitation forecast</Text>
                </TextContainer>

                <Button marginTop={80} onPress={() => navigation.push('SignUp')}>Get Started</Button>
            </Content>
        </Container>
    )
};

export default GettingStartedScreen;

const Container = styled.View`
    display: flex;
    flex: 1;
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