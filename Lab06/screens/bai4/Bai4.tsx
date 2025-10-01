import React, { useState, useEffect, createContext, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// ---------- Favorites Context ----------
const FavoritesContext = createContext();

function useFavorites() {
  return useContext(FavoritesContext);
}

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.find((f) => f.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// ---------- Tab Screens ----------
function ProductsScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addFavorite } = useFavorites();

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://68d16824e6c0cbeb39a4b532.mockapi.io/product"
      );
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
          >
            <Text style={styles.title}>Name: {item.name}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
          </TouchableOpacity>
          <Button title="Lưu" onPress={() => addFavorite(item)} />
        </View>
      )}
    />
  );
}

function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 18 }}>Chưa có sản phẩm nào được lưu</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
          </View>
          <Button title="Xóa" color="red" onPress={() => removeFavorite(item.id)} />
        </View>
      )}
    />
  );
}

// ---------- Product Details ----------
function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDetail = async () => {
    try {
      const res = await fetch(
        `https://68d16824e6c0cbeb39a4b532.mockapi.io/product/${id}`
      );
      const json = await res.json();
      setItem(json);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="tomato" />
      </View>
    );
  }

  if (!item) {
    return (
      <View style={styles.center}>
        <Text>Không tìm thấy dữ liệu!</Text>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Image source={{ uri: item.avatar }} style={styles.bigAvatar} />
      <Text style={styles.title}>Name: {item.name}</Text>
      <Text style={styles.price}>Price: {item.price}</Text>
      <Text style={styles.price}>Describe: {item.describe}</Text>
    </View>
  );
}

// ---------- Tabs ----------
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Products") iconName = "list-outline";
          else if (route.name === "Favorites") iconName = "heart-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// ---------- Stack ----------
const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoritesProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: "Chi tiết sản phẩm" }}
          />
        </Stack.Navigator>
    </FavoritesProvider>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "gray",
  },
  bigAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  center: {
    flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
    margin: 15,
  },
});
