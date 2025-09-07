
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function Screen6() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>REGISTER</Text>
      </View>

      <View style={{ flex: 3 }}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Name" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Phone" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />

          <Image source={require('../assets/eye.png')} style={styles.icon} />
        </View>

        <View style={styles.radioContainer}>
          <View style={styles.radioItem}>
            <View style={styles.circle}></View>
            <Text style={styles.radioLabel}>Male</Text>
          </View>

          <View style={styles.radioItem}>
            <View style={styles.circle}></View>
            <Text style={styles.radioLabel}>Female</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={{marginTop: 15}}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 15,
    backgroundColor: '#D8EFDF',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CAE1D1',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#C34F3C',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  radioContainer: {
    flexDirection: 'row',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  radioLabel: {
    marginLeft: 15,
  },
});
