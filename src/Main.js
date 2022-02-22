import React from 'react';
import styled from 'styled-components/native';
import GettingStartedScreen from './screens/GettingStarted';
import { StatusBar } from 'expo-status-bar';

const Main = () => {
    return(
        <>
            <StatusBar style='light' />
            <GettingStartedScreen />
        </>
    )
};

export default Main;

const Container = styled.View`
    flex: 1;
    display: flex;
    background: #000;
    align-items: center;
    justify-content: center;
`;