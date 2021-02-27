
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../screens/Products';
import Login from '../screens/Login';
const Stack = createStackNavigator();

function NavigationApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Products" component={Products}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default NavigationApp;