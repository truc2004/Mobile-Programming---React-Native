import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
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
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/blue.png')} style={styles.img} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          {products[0]?.name}
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                source={require('../../assets/star.png')}
                style={styles.starIcon}
              />
            ))}
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.price}>${products[0].price}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ textDecorationLine: 'line-through' }}>
              ${products[0].price}
            </Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image
            source={require('../../assets/question.png')}
            style={styles.questionIcon}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.buttonChoose}
            onPress={() => navigation.navigate('Chọn màu 2')}>
            <Text>4 MÀU - CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    // padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  img: {
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
  },
  infoContainer: {
    flex: 2,
  },
  title: {
    fontSize: 16,
  },
  starIcon: {
    height: 18,
    width: 18,
    marginRight: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questionIcon: {
    height: 15,
    width: 15,
    marginLeft: 5,
  },
  buttonChoose: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonBuy: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
