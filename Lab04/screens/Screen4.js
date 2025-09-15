import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Screen4() {
  return (
    <View style={{ flex: 1, backgroundColor: '#8D8DBE' }}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>PASSWORD {'\n'}GENERATOR</Text>

          <View style={styles.divider}></View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoIterm}>
            <Text style={styles.textIterm}>Password length</Text>
            <TextInput
              style={{ width: 90, height: 30, backgroundColor: 'white' }}
            />
          </View>

          <View style={styles.infoIterm}>
            <Text style={styles.textIterm}>Include lower case letters</Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
              }}>
              <Image
                source={require('../assets/check.png')}
                style={styles.checkIcon}
              />
            </View>
          </View>

          <View style={styles.infoIterm}>
            <Text style={styles.textIterm}>Include upcase letters</Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
              }}></View>
          </View>

          <View style={styles.infoIterm}>
            <Text style={styles.textIterm}>Include number</Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
              }}>
              <Image
                source={require('../assets/check.png')}
                style={styles.checkIcon}
              />
            </View>
          </View>

          <View style={styles.infoIterm}>
            <Text style={styles.textIterm}>Include special symbol</Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'white',
              }}></View>
          </View>
        </View>

        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <TouchableOpacity style={styles.button}>
            GENERATE PASSWORD
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#23235B',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  divider: {
    backgroundColor: '#151537',
    height: 30,
    width: '100%',
    marginTop: 30,
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  infoIterm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  textIterm: {
    color: 'white',
    fontSize: 17,
  },
  checkIcon: {
    height: 30,
    width: 30,
  },
  button: {
    flex: 0.6,
    color: 'white',
    backgroundColor: '#3B3B98',
    justifyContent: 'center',
    alignItems: 'center'

  }
});
