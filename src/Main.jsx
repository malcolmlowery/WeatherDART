import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Redux State
import store from './data';

// Screen Components
import GettingStartedScreen from './screens/GettingStarted';
import HomeScreen from './screens/Home';
import SignUpScreen from './screens/SignUp';

const Stack = createNativeStackNavigator();

const Main = () => {
    const isAuthenticated = true;

    return(
        <Provider store={store}>
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
                            {/* GettingStarted screen is declared here for testing purposes only. Will be removed */}
                            <Stack.Screen name='GetStarted' component={GettingStartedScreen} />
                            <Stack.Screen name='Home' component={HomeScreen} />
                        </>
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
};

export default Main;