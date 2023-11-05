import { View, Text,StyleSheet, Image} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features</Text>

      <View style={{...styles.featureSection, backgroundColor: '#b9e9c9'}}>
        <View style={styles.sectionHeader}>
          <Image source={require('../../../assets/images/chatgptIcon.png')} style={styles.iaIcon}/>
          <Text style={styles.subtitle}>ChatGPT</Text>
        </View>
        <Text style={styles.text}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a Wide range of topics.</Text>
      </View>

      <View style={{...styles.featureSection, backgroundColor: '#e4cce4'}}>
        <View style={styles.sectionHeader}>
          <Image source={require('../../../assets/images/dalleIcon.png')} style={styles.iaIcon}/>
          <Text style={styles.subtitle}>DALL-E</Text>
        </View>
        <Text style={styles.text}>DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
      </View>

      <View style={{...styles.featureSection, backgroundColor: '#ccffff'}}>
        <View style={styles.sectionHeader}>
          <Image source={require('../../../assets/images/smartaiIcon.png')} style={styles.iaIcon}/>
          <Text style={styles.subtitle}>Smart AI</Text>
        </View>
        <Text style={styles.text}>A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.</Text>
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: hp(60),
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  title: {
    fontSize: wp(6.5),
    fontWeight: '600',
    color: '#262626',
  },
  subtitle: {
    fontSize: wp(4.8),
    fontWeight: '600',
    color: '#262626',
  },
  text: {
    fontSize: wp(3.8),
    color: '#262626',
  },
  iaIcon: {
    height: hp(4),
    width: hp(4)
  },
  featureSection: {
    padding: 10,
    borderRadius: 10,
  },
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  }

});
