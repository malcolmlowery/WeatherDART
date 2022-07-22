import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';

const screenWidth = Dimensions.get('screen').width;

const Button = ({ 
    children, 
    color,
    marginTop = 0,
    onPress,
    style,
    isTextButton = false,
    width = 300
    }) => {
    return(
        <>
        { isTextButton ?
            <ButtonItem marginTop={marginTop} onPress={onPress} style={style, { background: 'transparent', width }}>
                <Text color={color} fontSize={12} fontWeight={500}>{children}</Text>
            </ButtonItem>
        :
            <ButtonItem 
                marginTop={marginTop} 
                onPress={onPress} 
                style={style, { paddingVertical: 16, width }}>
                <Text fontSize={16} fontWeight={500}>{children}</Text>
            </ButtonItem>
        }
        </>
    )
};

export default Button;

const ButtonItem = styled.TouchableOpacity`
    align-items: center;
    border-radius: 10px;
    background-color: #2d95ff;
    justify-content: center;
    margin-top: ${props => props.marginTop}px;
`;