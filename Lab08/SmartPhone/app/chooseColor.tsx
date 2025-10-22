
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';


type ColorKey = 'blue' | 'red' | 'black' | 'white';

interface ProductOption {
  key: ColorKey;
  colorLabel: string;
  price: string;
  image: any;
}

const IMAGE_MAP: Record<ColorKey, any> = {
  blue: require('../assets/images/blue.png'),
  red: require('../assets/images/red.png'),
  black: require('../assets/images/black.png'),
  white: require('../assets/images/white.png'),
};

export default function ChooseColor() {
  const [selected, setSelected] = useState({
    key: 'blue',
    colorLabel: 'xanh',
    price: '1.790.000 đ',
    image: IMAGE_MAP.blue,
  });

  const choose = (key: ColorKey, colorLabel: string, price: string) => {
    setSelected({ key, colorLabel, price, image: IMAGE_MAP[key] });
  };

  const handleFinish = () => {
    router.push({
      pathname: '/',
      params: {
        color: selected.colorLabel,
        price: selected.price,
        image: selected.key,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoProduct}>
        <View style={styles.imgWrapper}>
          <Image source={selected.image} style={styles.img} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={{ marginBottom: 6 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <Text style={{ marginBottom: 6 }}>
            Màu: <Text style={{ fontWeight: 'bold', color: selected.colorLabel }}>{selected.colorLabel}</Text>
          </Text>
          <Text style={styles.price}>{selected.price}</Text>
        </View>
      </View>

      <View style={styles.chooseColor}>
        <Text style={{ fontSize: 17, marginLeft: 10, marginVertical: 10 }}>
          Chọn một màu bên dưới
        </Text>

        <View style={styles.colorRow}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'white', borderWidth: selected.key === 'white' ? 3 : 0 }]}
            onPress={() => choose('white', 'trắng', '2.000.000 đ')}
          />
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'red', borderWidth: selected.key === 'red' ? 3 : 0 }]}
            onPress={() => choose('red', 'đỏ', '2.500.000 đ')}
          />
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'black', borderWidth: selected.key === 'black' ? 3 : 0 }]}
            onPress={() => choose('black', 'đen', '1.000.000 đ')}
          />
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'blue', borderWidth: selected.key === 'blue' ? 3 : 0 }]}
            onPress={() => choose('blue', 'xanh', '1.790.000 đ')}
          />
        </View>
      </View>

      <View style={styles.buttonWapper}>
        <TouchableOpacity style={styles.buttonFinish} onPress={handleFinish}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  infoProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },

  imgWrapper: {
    flex: 1,
    paddingRight: 10
  },

  img: {
    width: '100%',
    height: 120,
    resizeMode: 'contain'
  },

  textWrapper: {
    flex: 2
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold'
  },

  chooseColor: {
    flex: 2,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10
  },

  colorRow: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  colorBox: {
    marginTop: 10,
    height: 60,
    width: 60,
    borderRadius: 8
  },

  buttonWapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0'
  },

  buttonFinish: {
    backgroundColor: '#4D6DC1',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
});

