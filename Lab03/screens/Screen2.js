import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Screen2() {
  return (
    <LinearGradient
      colors={['#C9F3F6', '#E0F5F6', '#00CCF9']}
      style={styles.container}
      locations={[0, 0.85, 1]} 
      start={{ x: 0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }}  
    >
      <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <View style={styles.circle}>
          <View style={styles.circleSmall} />
        </View>
      </View>

      <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.mainText}>GROW {'\n'} YOUR BUSINESS</Text>
        <Text style={styles.subText}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>HOW WE WORK?</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: '#000',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleSmall: {
    width: 120,
    height: 120,
    backgroundColor: '#CBF4F7',
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
