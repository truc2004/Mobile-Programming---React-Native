import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

import Bai1 from './screens/bai1/Bai1';
import Bai2 from './screens/bai2/Bai2';
import Bai3 from './screens/bai3/Bai3';
import Bai4 from './screens/bai4/Bai4';
import Bai5 from './screens/bai5/Bai5';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Trang chủ" component={HomeScreen} />
        <Stack.Screen  name="Bài 1" component={Bai1} />
        <Stack.Screen  name="Bài 2" component={Bai2} />
        <Stack.Screen  name="Bài 3" component={Bai3} />
        <Stack.Screen  name="Bài 4" component={Bai4} />
        <Stack.Screen  name="Bài 5" component={Bai5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
