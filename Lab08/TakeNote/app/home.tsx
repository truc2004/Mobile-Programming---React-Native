import { Text, View, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';

type Task = {
  id: string;
  title: string;
};

export default function Home() {
  const { task, newTask  } = useLocalSearchParams();
  const [searchText, setSearchText] = useState('');

  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email' },
    { id: '2', title: 'UI task web page' },
    { id: '3', title: 'Learn JavaScript basic' },
    { id: '4', title: 'Learn Java' },
  ]);

  const filteredTasks = tasks.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAdd = () => {
    router.push({
      pathname: '/add',
      params: { task },
    })
  }

  useEffect(() => {
    if (newTask && typeof newTask === 'string') {
      setTasks(prev => [
        ...prev,
        { id: (prev.length + 1).toString(), title: newTask },
      ]);
    }
  }, [newTask]);

  const TaskItem = ({ item }: { item: Task }) => (
    <View style={styles.taskItem}>
      <View style={styles.textContainer}>
        <Image
          source={require("../assets/images/check-box.png")}
          style={[styles.icon1, { marginRight: 10, tintColor: 'green' }]}
        />
        <Text style={styles.taskText}>{item.title}</Text>
      </View>

      <Image
        source={require("../assets/images/edit-text.png")}
        style={[styles.icon1, { tintColor: 'red' }]}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("../assets/images/back.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.info}>
          <Image
            source={require("../assets/images/woman.png")}
            style={styles.img}
          />
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi {task}</Text>
            <Text style={{ fontSize: 15 }}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      {/* Ô tìm kiếm */}
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/images/loupe.png")}
          style={[styles.icon, { marginRight: 10 }]}
        />
        <TextInput
          placeholder='Search'
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Danh sách task */}
      <View style={{ flex: 5 }}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskItem item={item} />}
          contentContainerStyle={{ marginTop: 50 }}
          ListFooterComponent={
            <TouchableOpacity style={styles.button} onPress={handleAdd}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 45,
    width: 45,
    marginRight: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  searchContainer: {
    flex: 0.2,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  taskItem: {
    backgroundColor: '#D3D5D8',
    padding: 15,
    borderRadius: 40,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskText: {
    fontSize: 16,
    fontWeight: '500'
  },
  icon1: {
    height: 20,
    width: 20,
  },
  button: {
    backgroundColor: '#00BDD6',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  plus: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
