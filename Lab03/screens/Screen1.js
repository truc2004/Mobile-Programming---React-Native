import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Screen1() {
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <View style={styles.circle}>
          <View style={styles.circleSmall}> </View>
        </View>
      </View>

      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.mainText}>GROW {'\n'} YOUR BUSINESS</Text>
        <Text style={styles.subText}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    margin: 10,
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: '#000',
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center"
  },

  circleSmall: {
    width: 120,
    height: 120,
    backgroundColor: '#00CCF9',
    borderRadius: 75,
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
  button: {
    backgroundColor: '#E3C000',
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



