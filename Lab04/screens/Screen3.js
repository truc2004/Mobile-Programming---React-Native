
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Screen3() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2,  padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('../assets/book.png')}
              style={styles.bookImg}
            />
          </View>

          <View style={{ flex: 2, marginLeft: 15 }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ marginTop: 5 }}>Cung cấp bởi Tiki Trading</Text>
            <Text style={[styles.textRed, { marginTop: 5 }]}>141.800 đ</Text>
            <Text style={{ marginTop: 5, textDecorationLine: 'line-through' }}>
              141.800 đ
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={styles.buttonSmall}>
                  +
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                  1
                </View>
                <TouchableOpacity style={styles.buttonSmall}>
                  -
                </TouchableOpacity>
              </View>

              <View style={{}}>
                <Text style={styles.textBlue}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <View style={{ marginRight: 10 }}>
            <Text>Mã giảm giá đã lưu</Text>
          </View>

          <View style={{}}>
            <Text style={styles.textBlue}>Xem tại đây</Text>
          </View>
        </View>

        <View style={styles.discountContainer}>
          <View style={styles.discountButton}>
            <Image
              source={require('../discount.png')}
              style={styles.discountIcon}
            />
            <Text style={{ marginLeft: 10 }}>Mã giảm giá</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonBlue}>
              Áp dụng
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flex: 1,  backgroundColor: '#C4C4C4' }}>
        <View style={styles.styleRow}>
          <Text>Bạn có phiếu quà tặng từ {'\n'}Tiki/ Got it/ Urbox?</Text>
          <Text style={styles.textBlue}>Nhập tại đây?</Text>
        </View>

        <View style={styles.styleRow}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Tạm tính</Text>
          <Text style={styles.textRed}>141.800 đ</Text>
        </View>
      </View>

      <View style={{flex: 1,  padding: 10, }}>
        <View style={styles.styleRow}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Thành tiền</Text>
          <Text style={styles.textRed}>141.800 đ</Text>
        </View>

        <TouchableOpacity style={styles.buttonRed}>
              TIẾN HÀNH ĐẶT HÀNG
            </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  bookImg: {
    width: 100,
    height: 160,
  },
  textRed: { fontSize: 18, color: 'red', fontWeight: 'bold' },
  buttonSmall: {
    backgroundColor: '#ccc',
    padding: 5,
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlue: {
    color: 'blue',
    alignSelf: 'center',
  },
  discountContainer: {
    flexDirection: 'row',
    marginTop: 7,
    padding: 10,
    justifyContent: 'space-between',
  },
  discountButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    width: '60%',
  },
  discountIcon: {
    height: 25,
    width: 25,
  },
  buttonBlue: {
    backgroundColor: '#0A5EB7',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  styleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 8,
  },
  buttonRed: {
    backgroundColor: '#E53935',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
    borderRadius: 5,
  }
});
