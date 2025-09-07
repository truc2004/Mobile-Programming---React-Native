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
        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>CODE</Text>
      </View>

      <View
        style={{ flex: 1.3, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.mainText}>VERIFICATION</Text>
        <Text style={styles.subText}>
          Enter online password sent on {'\n'} ++849092605798
        </Text>
      </View>

      <View style={{ flex: 1.5 }}>
        <View style={styles.otpContainer}>
          {Array.from({ length: 6 }, (_, i) => (
            <TextInput
              key={i}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric" // chỉ nhập tối da 1 ký tự
            />
          ))}
        </View>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
 otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpInput: {
    borderWidth: 1,
    width: 40,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
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
