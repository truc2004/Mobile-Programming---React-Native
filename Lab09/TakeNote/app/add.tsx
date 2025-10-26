import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { addItem } from '../data/db';

export default function Add() {
  const { task } = useLocalSearchParams();
  const [search, setSearch] = useState('');

  const handleAdd = async () => {
    if (search.trim() === '') return;
    await addItem(search);
    router.back();
  };

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
            <Text style={styles.subtitle}>Let's add a new task today!</Text>
          </View>
        </View>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>ADD YOUR JOB</Text>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/to-do-list.png')}
          style={[styles.icon, { tintColor: '#00BDD6', marginRight: 10 }]}
        />
        <TextInput
          placeholder="Input your job..."
          placeholderTextColor="#999"
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>FINISH</Text>
      </TouchableOpacity>

      {/* IMAGE DECORATION */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/take-note.png')}
          style={styles.decorImage}
        />
      </View>
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
  },
  backButton: {
    marginRight: 15,
    padding: 5,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#00BDD6',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#00BDD6',
    textAlign: 'center',
    marginVertical: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#00BDD6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#00BDD6',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorImage: {
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
    opacity: 0.9,
  },
});
