import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen1() {
  return (
    <LinearGradient
      colors={['#F0E55F', '#F0C136', '#C19C00']}
      style={styles.container}
      locations={[0, 0.5, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}>
      <View
        style={{ flex: 1.5, justifyContent: 'center', alignItems: 'flex-start' }}>
        <Text style={styles.mainText}>LOGIN</Text>
      </View>

      <View style={{ flex: 1.5 }}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/user.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/lock.png')}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Pasword"
            style={styles.input}
            secureTextEntry={true}
          />
          <Image
            source={require('../assets/eye.png')}
            style={styles.inputIcon}
          />
        </View>
      </View>

      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
       <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Forgot your password?</Text>

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
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7DF52',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
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
    backgroundColor: 'black',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    fontSize: 17,
    fontWeight: 'bold'
  }
});
