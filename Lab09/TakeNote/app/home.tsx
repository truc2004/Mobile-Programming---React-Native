import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, router, useFocusEffect } from 'expo-router';
import { getItems, deleteItem, setupDB } from '../data/db';

export default function Home() {
  const { task } = useLocalSearchParams();
  const [tasks, setTasks] = useState<any[]>([]);
  const [searchText, setSearchText] = useState('');

  const fetchTasks = async () => {
    await setupDB();
    const all = await getItems();
    setTasks(all);
  };

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  const filteredTasks = tasks.filter((item) =>
    item.value.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDelete = async (id: number) => {
    await deleteItem(id);
    fetchTasks();
  };

  const TaskItem = ({ item }: { item: any }) => (
    <View style={styles.taskItem}>
      <View style={styles.taskContent}>
        <Image
          source={require('../assets/images/check-box.png')}
          style={[styles.taskIcon, { tintColor: '#00BDD6' }]}
        />
        <Text style={styles.taskText}>{item.value}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Image
          source={require('../assets/images/trash.png')}
          style={[styles.taskIcon, { tintColor: '#FF4D4D' }]}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Image source={require('../assets/images/back.png')} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.info}>
          <Image source={require('../assets/images/woman.png')} style={styles.avatar} />
          <View>
            <Text style={styles.welcome}>Hi, {task} 👋</Text>
            <Text style={styles.subtitle}>Have a productive day!</Text>
          </View>
        </View>
      </View>

      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/images/loupe.png')}
          style={[styles.icon, { tintColor: '#00BDD6', marginRight: 10 }]}
        />
        <TextInput
          placeholder="Search your tasks..."
          placeholderTextColor="#999"
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* LIST */}
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem item={item} />}
        contentContainerStyle={{ paddingBottom: 130 }}
      />

      {/* ADD BUTTON */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push({ pathname: '/add', params: { task } })}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 25,
    paddingTop: 50,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    marginBottom: 20,
  },
  backButton: { marginRight: 15, padding: 5 },
  icon: { width: 28, height: 28, tintColor: '#00BDD6' },
  info: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  welcome: { fontSize: 20, fontWeight: '600', color: '#222' },
  subtitle: { fontSize: 14, color: '#777' },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 15,
  },
  input: { flex: 1, fontSize: 16, color: '#333' },


  taskItem: {
    backgroundColor: '#E2E2E2',
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.2,
    elevation: 2,
    marginBottom: 15,
  },
  taskContent: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  taskIcon: { width: 24, height: 24 },
  taskText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flexShrink: 1,
  },

  /* ADD BUTTON */
  addButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#00BDD6',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00BDD6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  plus: {
    color: 'white',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 40,
  },
});
