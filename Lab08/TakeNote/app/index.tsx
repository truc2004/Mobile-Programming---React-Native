import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  const [task, setTask] = useState('');

  const handlePress = () => {
    if (task.trim() === '') return;

    router.push({
      pathname: '/home',
      params: { task },
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>manage your task</Text>

      <View
        style={[
          styles.inputContainer,
        ]}
      >
        <Image
          source={require('../assets/images/email.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={task}
          onChangeText={setTask}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  title: {
    textTransform: 'uppercase',
    color: '#6C4AB6',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 40,
    letterSpacing: 1,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    width: '80%',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#DADADA',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 25,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#6C4AB6',
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },

  button: {
    backgroundColor: '#6C4AB6',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 12,
    shadowColor: '#6C4AB6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
