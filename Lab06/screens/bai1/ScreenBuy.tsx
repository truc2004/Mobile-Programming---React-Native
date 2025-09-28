
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export default function App({ navigation, route }) {
  const {image, price} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={image} style={styles.img} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image
              source={require('../../assets/star.png')}
              style={styles.starIcon}
            />
            <Image
              source={require('../../assets/star.png')}
              style={styles.starIcon}
            />
            <Image
              source={require('../../assets/star.png')}
              style={styles.starIcon}
            />
            <Image
              source={require('../../assets/star.png')}
              style={styles.starIcon}
            />
            <Image
              source={require('../../assets/star.png')}
              style={styles.starIcon}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>(Xem 828 đánh giá)</Text>
          </View>
        </View>

        <View
          style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.price}>{price}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={{ textDecorationLine: 'line-through' }}>
              {price}
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

        <View style={{marginTop: 20, }}>
          <TouchableOpacity style={styles.buttonChoose}
            onPress={() => navigation.navigate('Chọn màu')}
          >4 MÀU - CHỌN MUA</TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity style={styles.buttonBuy}>CHỌN MUA</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 15,
  },
  imgContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'white',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'

  }
});