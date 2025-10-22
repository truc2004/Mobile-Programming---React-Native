
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

type ColorKey = 'blue' | 'red' | 'black' | 'white';

interface ProductOption {
  key: ColorKey;
  colorLabel: string;
  price: string;
  image: any;
}

const IMAGE_MAP = {
  blue: require('../assets/images/blue.png'),
  red: require('../assets/images/red.png'),
  black: require('../assets/images/black.png'),
  white: require('../assets/images/white.png'),
};

export default function Index() {
  const params = useLocalSearchParams();
  const { color: pColor, price: pPrice, image: pImage } = params || {};

  // state hiển thị
  const [product, setProduct] = useState({
    color: 'xanh',
    price: '1.790.000 đ',
    image: IMAGE_MAP.blue,
  });


  useEffect(() => {
    if (pColor || pPrice || pImage) {
      setProduct(prev => ({
        ...prev,
        color: Array.isArray(pColor) ? pColor[0] : pColor || prev.color,
        price: Array.isArray(pPrice) ? pPrice[0] : pPrice || prev.price,
        image:
          typeof pImage === 'string' && IMAGE_MAP[pImage as ColorKey]
            ? IMAGE_MAP[pImage as ColorKey]
            : prev.image,
      }));
    }
  }, [pColor, pPrice, pImage]);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={product.image} style={styles.img} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={{ marginTop: 6 }}>
            Màu: <Text style={{ fontWeight: 'bold', color: product.color }}>{product.color}</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buttonChoose}
          onPress={() => router.push('/chooseColor')}
        >
          <Text>4 MÀU - CHỌN MUA</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonBuy}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    margin: 10, 
    padding: 15 
  },

  imgContainer: { 
    flex: 3, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  img: { 
    height: '80%', 
    width: '80%', 
    resizeMode: 'contain' 
  },

  infoContainer: { 
    flex: 2, 
    marginTop: 10 
  },

  title: { 
    fontSize: 16 
  },

  price: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },

  buttonChoose: { 
    borderRadius: 10, 
    borderWidth: 1, 
    padding: 10, 
    marginTop: 16, 
    alignItems: 'center' 
  },

  buttonBuy: { 
    backgroundColor: 'red', 
    padding: 12, 
    borderRadius: 10, 
    marginTop: 12, 
    alignItems: 'center' 
  },
});
