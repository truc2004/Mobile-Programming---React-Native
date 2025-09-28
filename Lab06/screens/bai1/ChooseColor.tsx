import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.infoProduct}>
        <View style={styles.imgWrapper}>
          <Image source={require('../../assets/blue.png')} style={styles.img} />
        </View>

        <View style={styles.textWrapper}>
          <Text style={{ marginBottom: 6 }}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>

          <Text style={{ marginBottom: 6 }}>
            Màu: <Text style={{ fontWeight: 'bold', color: 'blue' }}>xanh</Text>
          </Text>

          <Text style={{ marginBottom: 6 }}>
            Cung cấp bởi{' '}
            <Text style={{ fontWeight: 'bold' }}>Tiki Tradding</Text>
          </Text>

          <Text style={styles.price}>1.790.000 đ</Text>
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
              navigation.navigate('ScreenInfo', {
                image: require('../../assets/white.png'), 
                color: 'trắng',
                price: '2.000.000 VNĐ',
              })
            }
          />
        </View>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'red' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo', {
                image: require('../../assets/red.png'), 
                color: 'đỏ',
                price: '2.500.000 VNĐ',
              })
            }></TouchableOpacity>
        </View>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'black' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo', {
                image: require('../../assets/black.png'), 
                color: 'đen',
                price: '1.000.000 VNĐ',
              })
            }></TouchableOpacity>
        </View>
        <View style={styles.colorWapper}>
          <TouchableOpacity
            style={[styles.colorBox, { backgroundColor: 'blue' }]}
            onPress={() =>
              navigation.navigate('ScreenInfo', {
                image: require('../../assets/blue.png'), 
                color: 'Xanh',
                price: '1.790.000 VNĐ',
              })
            }></TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonWapper}>
        <TouchableOpacity
          style={styles.buttonFinish}
          onPress={() => navigation.navigate('Bài 1')}>
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
