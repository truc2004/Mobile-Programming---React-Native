import * as React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// --- Screen: Home ---
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home!</Text>
    </View>
  );
}

// --- Screen: Profile ---
function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text style={styles.info}>Name: Nguyễn Thanh Trúc - 22663401</Text>
      <Text style={styles.info}>Class: Lập trình thiết bị di động</Text>
    </View>
  );
}

// --- Screen: Settings ---
function SettingsScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isEnabled ? "#ADD8E6" : "#D3D3D3" }, 
      ]}
    >
      <Text style={styles.text}>Settings</Text>
      <View style={styles.row}>
        <Text style={styles.info}>Blue background color</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>
    </View>
  );
}


export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginTop: 5,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
});
