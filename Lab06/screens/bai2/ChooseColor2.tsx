import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App({ navigation }) {
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://68d16824e6c0cbeb39a4b532.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 4));
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); 
      });
  }, []);

  if (loading) {

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
        <Text style={{ marginTop: 10 }}>Đang tải sản phẩm...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoProduct}>
        <View style={styles.imgWrapper}>
          <Image source={require('../../assets/blue.png')} style={styles.img} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={{ marginBottom: 6 }}>
            {products[0].name}
          </Text>

          <Text style={{ marginBottom: 6 }}>
            Màu: <Text style={{ fontWeight: 'bold', color: 'blue' }}>xanh</Text>
          </Text>

          <Text style={{ marginBottom: 6 }}>
            Cung cấp bởi{' '}
            <Text style={{ fontWeight: 'bold' }}>Tiki Tradding</Text>
          </Text>

          <Text style={styles.price}>${products[0].price}</Text>
        </View>
      </View>

      <View style={styles.chooseColor}>
        <Text style={{ fontSize: 17, marginLeft: 10, marginVertical: 10 }}>
          Chọn một màu bên dưới
        </Text>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'white' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo2', {
                image: require('../../assets/white.png'), 
                color: 'trắng',
                price: "$" + products[1]?.price,
                name: products[1]?.name,
              })
            }
          />
        </View>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'red' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo2', {
                image: require('../../assets/red.png'), 
                color: 'đỏ',
                price: "$" + products[2]?.price,
                name: products[2]?.name,
              })
            }></TouchableOpacity>
        </View>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'black' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo2', {
                image: require('../../assets/black.png'), 
                color: 'đen',
                price: "$" + products[3]?.price,
                name: products[3]?.name,
              })
            }></TouchableOpacity>
        </View>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'blue' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo2', {
                image: require('../../assets/blue.png'), 
                color: 'Xanh',
                price: "$" + products[0]?.price,
                name: products[4]?.name,
              })
            }></TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonWapper}>
        <TouchableOpacity
          style={styles.buttonFinish}
          onPress={() => navigation.navigate('Bài 2')}>
          XONG
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  imgWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  img: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 2,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  chooseColor: {
    flex: 2,
    backgroundColor: '#cccc',
  },
  colorWapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    marginTop: 10,
    height: 60,
    width: 60,
  },
  buttonWapper: {
    justifyContent: 'center',
    alignContent: 'flex-end',
    backgroundColor: '#cccc',
    alignItems: 'center',
    padding: 10,
  },
  buttonFinish: {
    backgroundColor: '#4D6DC1',
    width: '90%',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
});
