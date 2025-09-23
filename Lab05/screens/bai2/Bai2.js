import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';

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

export default function Screen2() {
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
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 50, margin: 10 }}
          data={data}
          renderItem={({ item }) => <Com item={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
