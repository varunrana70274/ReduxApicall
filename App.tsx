/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import home from './components/home';
import {store} from './redux_Api/store';
const Stack = createNativeStackNavigator();
export default function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
