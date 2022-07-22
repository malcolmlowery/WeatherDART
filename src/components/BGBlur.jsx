import { Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import styled from 'styled-components/native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const BGBlur = ({
    showBgImage = true,
}) => {
    return(
        <>
            <BlurView style={{ position: 'absolute', height: screenHeight + 100, width: screenWidth, zIndex: 3 }} intensity={100} tint='dark' />
            { showBgImage &&
                <>
                    <BGImg style={{ top: 180, left: 70 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_12-512.png' }} />
                    <BGImg style={{ top: 180, right: 70 }} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_13-512.png' }} />
                </>
            }
        </>
    )
};

export default BGBlur;

const BGImg = styled.Image`
    align-self: center;
    height: 225px;
    position: absolute;
    width: 225px;
    z-index: 2;
`;
