import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ----- Home Screen -----
function HomeScreen() {
  const Com = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        alignItems: 'center',
      }}>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 60, height: 60, borderRadius: 30 }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
      </View>
    </View>
  );

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFn = async () => {
    try {
      const response = await fetch(
        'https://68d16824e6c0cbeb39a4b532.mockapi.io/user'
      );
      const d = await response.json();
      setData(d);
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFn();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Com item={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          style={{margin: 10}}
          ListHeaderComponent={
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  color: 'red',
                }}>
                Danh sách người dùng
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}

// ----- Search Screen -----
function SearchScreen() {
  return (
    <View style={styles.containerCenter}>
      <TextInput
        style={styles.input}
        placeholder="Nhập từ khóa tìm kiếm..."
      />
    </View>
  );
}

// ----- Profile Screen -----
function ProfileScreen() {
  return (
    <View style={styles.containerCenter}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nguyễn Văn A</Text>
    </View>
  );
}

// ----- Bottom Tab -----
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Search') iconName = 'search-outline';
            else if (route.name === 'Profile') iconName = 'person-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 12 },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

// ----- Styles -----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
