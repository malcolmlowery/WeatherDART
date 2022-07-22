import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const BGGradient = () => {
    return(
        <LinearGradient 
            colors={['#0c0e20', '#0c0c1e']} 
            style={{ 
                flex: 1, 
                position: 'absolute', 
                height: screenHeight + 100, 
                width: screenWidth,
            }}
        />
    )
}

export default BGGradient;