import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import Screen7 from './screens/Screen7';
import Screen8 from './screens/Screen8';

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
        <Stack.Screen name="Màn hình 5" component={Screen5} />
        <Stack.Screen name="Màn hình 6" component={Screen6} />
        <Stack.Screen name="Màn hình 7" component={Screen7} />
        <Stack.Screen name="Màn hình 8" component={Screen8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
