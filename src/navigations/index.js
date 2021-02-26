import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../core/theme'
import {
    StartScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  } from '../screens'

const Stack = createStackNavigator();

const NavigationApp = () => {
    return (
        <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>                   
            <Stack.Screen name="LoginScreen" component={LoginScreen} />          
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

  export default NavigationApp;