import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen'
import Bai1 from './screens/bai1/Bai1'
import ChooseColor from './screens/bai1/ChooseColor'
import ScreenInfo from './screens/bai1/ScreenInfo'
import ScreenBuy from './screens/bai1/ScreenBuy'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Bài 1" component={Bai1}/>
        <Stack.Screen name="Chọn màu" component={ChooseColor}/>
        <Stack.Screen name="ScreenInfo" component={ScreenInfo}/>
        <Stack.Screen name="ScreenBuy" component={ScreenBuy}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  
});
