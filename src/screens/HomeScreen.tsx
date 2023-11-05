import { Text, View, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { JarvisImage } from '../components/JarvisImage/JarvisImage';
import { Features } from '../components/Features/Features';
import { useState } from 'react';
import { RoleEnum, type Message } from '../types';
import { MessageList } from '../components/MessageList/MessageList';
import { dummyMessages } from '../constants';
import { Actions } from '../components/Actions/Actions';
import { apiCall } from '../api/openAI';

const HomeScreen = () => {
  const [messages, setMessages] = useState<Message[]>(dummyMessages)
  const [text, setText] = useState('');

  const [displayRecording, setDisplayRecording] = useState(false);

  const fetchResponse = () => {
    apiCall(text, messages).then(res => {
      setText('')
    })
  }

  const clearMessages = () => {
    setMessages([])
  }

  const addMessage = () => {
    if (text.length) {
      setMessages(messages => messages.concat({
        role: RoleEnum.user, content: text
      }))
      fetchResponse()
    }
  }
  const toogleMenu = () => {
    setDisplayRecording(display => !display)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.areaView}>
        <View style={styles.centered}>
          <JarvisImage width={hp(15)} height={hp(15)} />
        </View>
        {/* features || messages */}
        {messages.length > 0 ? (
          <MessageList messages={messages} />)
          : (<Features />)
        }
        <View style={styles.switchVoiceTextContainer}>
          <Switch
            trackColor={{ false: '#767577', true: '#50C878' }}
            thumbColor={'#7a42f4'}
            onValueChange={() => toogleMenu()}
            value={displayRecording}
          >
          </Switch>
          <Text>{displayRecording ? 'Change to Text menu' : 'Change to Voice menu'}</Text>
        </View>
        {displayRecording ?
          (<Actions
            displayClear={messages.length > 0}
            onPressVoice={() => { }}
            onPressCancel={() => { }}
            onPressClear={clearMessages} />)
          :
          (<SafeAreaView style={styles.actionContainer}>
            <TextInput
              style={styles.inputText}
              onChangeText={newText => setText(newText)}
              placeholder="Type here to chat!"
              value={text}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => addMessage()}>
              <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          </SafeAreaView>)
        }



      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  areaView: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: wp(5)
  },

  inputText: {
    backgroundColor: '#a6a6a6',
    borderRadius: 16,

    padding: 10,
    flex: 1
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
    gap: 8,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    borderRadius: 16,
  },
  submitButtonText: {
    color: 'white'
  },
  switchVoiceTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginTop: 20
  }
});
