import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const screens = [
  { id: 1, name: 'Màn hình 1' },
  { id: 2, name: 'Màn hình 2' },
  { id: 3, name: 'Màn hình 3' },
  { id: 4, name: 'Màn hình 4' },
  { id: 5, name: 'Màn hình 5' },
  { id: 6, name: 'Màn hình 6' },
  { id: 7, name: 'Màn hình 7' },
  { id: 8, name: 'Màn hình 8' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.name)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#74b9ff',
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  text: { fontSize: 18, color: 'white', fontWeight: 'bold' },
});
