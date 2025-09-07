
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function Screen5() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="emailAddress"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />

          <Image source={require('../assets/eye.png')} style={styles.icon} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>When you agree to terms and conditions</Text>
        <Text style={{ marginTop: 10 }}>For got your password?</Text>
        <Text style={{ marginTop: 10 }}>Or login with</Text>

        <View style={styles.buttonContainer}>
          <View style={[styles.item, {backgroundColor: '#3A559F'}]}>
            <TouchableOpacity>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.itemIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={[styles.item, {backgroundColor: '#00B2FF'}]}>
            <TouchableOpacity style={{}}>
              <Image
                source={require('../assets/letter-z.png')}
                style={styles.itemIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity style={{}}>
              <Image
                source={require('../assets/gg.png')}
                style={styles.itemIcon}
              />
            </TouchableOpacity>
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
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 40,
    width: '100%',
    borderWidth: 1,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  itemIcon: {
    width: 30,
    height: 30,
  },
});
