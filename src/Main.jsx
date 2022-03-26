import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen Components
import GettingStartedScreen from './screens/GettingStarted';
import HomeScreen from './screens/Home';
import SignUpScreen from './screens/SignUp';

const Stack = createNativeStackNavigator();

const Main = () => {
    const isAuthenticated = true;

    return(
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    { !isAuthenticated ?
                        <>
                            <Stack.Screen name='GetStarted' component={GettingStartedScreen} />
                            <Stack.Screen name='SignUp' component={SignUpScreen} />
                        </>
                        :
                        <>
                            <Stack.Screen name='Home' component={HomeScreen} />
                        </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
};

export default Main;