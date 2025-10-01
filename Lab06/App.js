import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './screens/HomeScreen'
import Bai1 from './screens/bai1/Bai1';
import Bai2 from './screens/bai2/Bai2';
import Bai3 from './screens/bai3/Bai3';
import Bai4 from './screens/bai4/Bai4';
import Bai5 from './screens/bai5/Bai5';
import ChooseColor from './screens/bai1/ChooseColor'
import ScreenInfo from './screens/bai1/ScreenInfo'
import ScreenBuy from './screens/bai1/ScreenBuy'
import ChooseColor2 from './screens/bai2/ChooseColor2'
import ScreenInfo2 from './screens/bai2/ScreenInfo2'
import ScreenBuy2 from './screens/bai2/ScreenBuy2'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Bài 1" component={Bai1}/>
        <Stack.Screen name="Bài 2" component={Bai2}/>
        <Stack.Screen  name="Bài 3" component={Bai3} />
        <Stack.Screen  name="Bài 4" component={Bai4} />
        <Stack.Screen  name="Bài 5" component={Bai5} />
        <Stack.Screen name="Chọn màu" component={ChooseColor}/>
        <Stack.Screen name="ScreenInfo" component={ScreenInfo}/>
        <Stack.Screen name="ScreenBuy" component={ScreenBuy}/>
         <Stack.Screen name="Chọn màu 2" component={ChooseColor2}/>
        <Stack.Screen name="ScreenInfo2" component={ScreenInfo2}/>
        <Stack.Screen name="ScreenBuy2" component={ScreenBuy2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  
});
