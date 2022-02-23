import React from 'react';
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
    }) => {
    return(
        <>
        { isTextButton ?
            <ButtonItem marginTop={marginTop} onPress={onPress} style={style, { background: 'transparent'}}>
                <Text color={color} fontSize={12} fontWeight={500}>{children}</Text>
            </ButtonItem>
        :
            <ButtonItem 
                marginTop={marginTop} 
                onPress={onPress} 
                style={style, {backgroundColor: '#2d95ff', paddingVertical: 16}}>
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
    justify-content: center;
    margin-top: ${props => props.marginTop}px;
    width: ${screenWidth - 60}px;
`;