import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  TextInput,
} from 'react-native';

export default function Screen2() {
  return (
    <View style={{ margin: 20, flex: 1 }}>
      <View style={{ flex: 1,}}>
        <View style={styles.info}>
          <Image source={require('../assets/usb.png')} style={styles.img} />
          <Text>
            USB Bluetooth Music Receiver HJX-001-Biến loa thường thành load
            bluetooth
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, marginBottom: 12}}>Cực kỳ hài lòng</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}
          />
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}
          />
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}
          />
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}
          />
          <Image
            source={require('../assets/star.png')}
            style={styles.starIcon}
          />
        </View>
      </View>

      <View style={styles.caremaContainer}>
        <View style={styles.cameraItem}>
          <Image
            source={require('../assets/camera.png')}
            style={styles.cameraIcon}
          />
          <Text>Thêm hình ảnh</Text>
        </View>
      </View>

      <View style={styles.commentContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          placeholderTextColor="#aaa"
          multiline={true} // có thể xuống dòng
        />

        <Text style={{ alignSelf: 'flex-end', marginRight:10 }}>
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity style={styles.button}>
          Gửi
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  img: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  starIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  caremaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#322FED',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 15,
  },
  cameraItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
  commentContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
  },
  inputBox: {
    height: 120,
    padding: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D5DB6',
    fontSize: 20,
    color: 'white',
    padding: 10,
    borderRadius: 7,
  }
});
