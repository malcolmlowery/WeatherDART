import React from 'react';
import styled from 'styled-components/native';
import Text from '../components/Text';
import BGGradient from '../components/BGGraident';

const HomeScreen = () => {
    return(
        <Container>
            <BGGradient/>
            <Text fontSize={19}>Home Screen</Text>
        </Container>
    )
};

export default HomeScreen;

const Container = styled.View`
    align-items: center;
    background: #fff;
    flex: 1;
    justify-content: center;
`;