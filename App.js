import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tricks from './components/tricks';
import makeTrick from './components/makeTrick';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screen={Tricks}>
        <Stack.Screen name="Escolha sua manobra" options={{ headerShown: false }} component={Tricks} />
        <Stack.Screen name="Monte sua manobra"
          options={{
            headerStyle: {
              backgroundColor: '#444444',
            },
            headerTintColor: '#fff',
          }} component={makeTrick} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
