import React from 'react'
import {
  Image,
  View,
  Text
} from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {BookDetail} from './screens/';
import Tabs from './Navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme} >
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={''}>
        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* screen */}
        <Stack.Screen name="BookDetail" component={BookDetail} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;