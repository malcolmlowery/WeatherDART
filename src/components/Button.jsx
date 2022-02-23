import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Text from './Text';

const screenWidth = Dimensions.get('screen').width;

const Button = ({ children, marginTop = 0 }) => {
    return(
        <ButtonItem marginTop={marginTop}>
            <Text fontSize={16} fontWeight={500}>{children}</Text>
        </ButtonItem>
    )
};

export default Button;

const ButtonItem = styled.TouchableOpacity`
    align-items: center;
    border-radius: 10px;
    background: #2d95ff;
    justify-content: center;
    margin-top: ${props => props.marginTop}px;
    padding: 16px 0;
    width: ${screenWidth - 60}px;
`;