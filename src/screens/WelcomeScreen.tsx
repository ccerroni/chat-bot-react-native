import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { JarvisImage } from '../components/JarvisImage/JarvisImage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Jarvis</Text>
        <Text style={styles.text}>The future is here, powered by AI.</Text>
      </View>
      <JarvisImage />
      <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Home' as never)}>
        <Text style={styles.btnText}>Get started</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: wp(12),
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    fontSize: wp(4),
    textAlign: 'center'
  },
  startBtn: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 15,
    width: '90%', 
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 5,
    fontSize: wp(5)
  }
});
