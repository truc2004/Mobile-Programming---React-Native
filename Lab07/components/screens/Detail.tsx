import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Detail({ route, navigation }) {
  const { name, price, description, image } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row',  alignContent: 'center', marginBottom: 10 }} onPress={() => navigation.navigate('List')}>
        <Image
          source={require('../../assets/left-arrow.png')}
          style={styles.iconBack}
        />
        <Text style={{fontSize: 18, marginLeft: 10}}>Home</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <View style={styles.imgContainer}>
          <Image source={image} style={styles.img} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{name}</Text>

          <Text style={{ marginTop: 15, fontSize: 15 }}>
            15% OFF | 350$
            <Text
              style={{ textDecorationLine: 'line-through', marginLeft: 20 }}>
              {price}
            </Text>
          </Text>

          <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 15 }}>
            Description
          </Text>
          <Text style={{ marginTop: 10 }}>{description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Image
            source={require('../../assets/heart.png')}
            style={styles.iconHeart}
          />

          <TouchableOpacity style={styles.button}>Add to card</TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHeart: {
    height: 20,
    width: 20,
  },
  button: {
    marginLeft: 20,
    backgroundColor: '#E94141',
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },
  iconBack: {
    marginTop: 5,
    height: 15,
    width: 15,
  },
});
