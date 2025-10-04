import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center' }}>
        <Text style={styles.title}>
          A premium online store for sporter and their stylist choise
        </Text>
      </View>

      <View style={{ flex: 2 }}>
        <View style={styles.imgContainer}>
          <Image source={require('../../assets/5.png')} style={styles.img} />
        </View>

        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.subTitle}>POWER BIKE SHOP</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('List')}>
          Get Started
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgContainer: {
    flex: 2,
    backgroundColor: '#FDEDED',
    padding: 10,
    borderRadius: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  subTitle: {
    fontSize: 18,
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    width: '100%',
  },
});
