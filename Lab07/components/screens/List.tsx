import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    name: 'Pinarello',
    price: '$1800',
    image: require('../../assets/1.png'),
    description:
      'A premium road bike designed for speed and long-distance rides.',
  },
  {
    id: 2,
    name: 'Pina Mountain',
    price: '$1700',
    image: require('../../assets/2.png'),
    description:
      'A durable mountain bike built for off-road and rough terrains.',
  },
  {
    id: 3,
    name: 'Pina Bike',
    price: '$1500',
    image: require('../../assets/3.png'),
    description:
      'A versatile bike suitable for daily commuting and casual rides.',
  },
  {
    id: 4,
    name: 'Pinarello',
    price: '$1900',
    image: require('../../assets/4.png'),
    description:
      'An upgraded Pinarello model with a lightweight frame and optimized speed.',
  },
  {
    id: 5,
    name: 'Pina Mountain',
    price: '$2700',
    image: require('../../assets/5.png'),
    description:
      'A high-end mountain bike with advanced suspension for a smooth experience.',
  },
  {
    id: 6,
    name: 'Pinarello',
    price: '$1470',
    image: require('../../assets/6.png'),
    description:
      'An affordable Pinarello model with a compact design for beginners.',
  },
];

export default function List() {
  const navigation = useNavigation();
  const [dataList, setDataList] = useState(data);
  const [selected, setSelected] = useState('All');

  const getData = (nameSearch: string) => {
    setSelected(nameSearch);
    if (nameSearch === 'All') {
      setDataList(data);
    } else {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(nameSearch.toLowerCase())
      );
      setDataList(filtered);
    }
  };

  const renderButton = (label: string) => (
    <TouchableOpacity
      style={[styles.button, selected === label && styles.buttonActive]}
      onPress={() => getData(label)}>
      <Text style={selected === label ? styles.textActive : styles.textNormal}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>The world's Best Bike</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.listButton}>
          {renderButton('All')}
          {renderButton('Pinarello')}
          {renderButton('Mountain')}
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={dataList}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate('Detail', {
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    image: item.image,
                  })
                }>
                <Image
                  source={require('../../assets/heart.png')}
                  style={styles.iconHeart}
                />
                <View style={styles.imgContainer}>
                  <Image source={item.image} style={styles.imgCard} />
                </View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8,
  },
  title: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    borderColor: 'red',
    borderWidth: 1,
    width: '25%',
    padding: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: 'red',
  },
  textNormal: {
    color: 'red',
  },
  textActive: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    padding: 8,
    width: '45%',
    marginRight: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FEF5ED',
  },
  imgContainer: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  imgCard: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  iconHeart: {
    height: 15,
    width: 15,
  },
});
