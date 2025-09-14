import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trang chủ" component={HomeScreen} />
        <Stack.Screen name="Màn hình 1" component={Screen1} />
        <Stack.Screen name="Màn hình 2" component={Screen2} />
        <Stack.Screen name="Màn hình 3" component={Screen3} />
        <Stack.Screen name="Màn hình 4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
