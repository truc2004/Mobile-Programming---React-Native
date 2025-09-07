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
    <LinearGradient
      colors={['#C9F3F6', '#E0F5F6', '#00CCF9']}
      style={styles.container}
      locations={[0, 0.85, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/lock.png')} style={styles.img} />
        </View>
      </View>

      <View style={{ flex: 1.3, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.mainText}>FORGET {'\n'} PASSEORD</Text>
        <Text style={styles.subText}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>

      <View style={{ flex: 1.5 }}>
        {/* Input with icon */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/email.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 15,
  },
  img: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
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
    backgroundColor: '#E3C000',
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
