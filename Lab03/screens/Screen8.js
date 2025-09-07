import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen3() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/eyeBig.png')} style={styles.img} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Please input user name"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/lock.png')}
            style={styles.inputIcon}
          />
          <TextInput placeholder="Please password" style={styles.input} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 15,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Register</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Forget Password
          </Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'blue' }} />
          <Text style={{ marginHorizontal: 10 }}>Other Login Methods</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: 'blue' }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={[styles.iconContainer, { backgroundColor: '#3AB4FF' }]}>
            <Image
              source={require('../assets/add-user.png')}
              style={styles.loginIcon}
            />
          </View>

          <View style={[styles.iconContainer, { backgroundColor: '#F4AA47' }]}>
            <Image
              source={require('../assets/wifi.png')}
              style={styles.loginIcon}
            />
          </View>

          <View style={[styles.iconContainer, { backgroundColor: '#3A559F' }]}>
            <Image
              source={require('../assets/facebook.png')}
              style={styles.loginIcon}
            />
          </View>
        </View>
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
  img: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,

    shadowColor: '#C4C4C4',
    shadowOffset: { width: 8, height: 10 },
    shadowRadius: 3.5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
    paddingHorizontal: 10,
    marginTop: 20,
    paddingBottom: 5,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    height: 40,
  },

  button: {
    backgroundColor: '#386FFC',
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginIcon: {
    width: 25,
    height: 25,
  },
});
