import { useEffect, useState } from 'react';
// import Voice, { 
//     type SpeechResultsEvent, 
//     type SpeechEndEvent, 
//     type SpeechStartEvent, 
//     type SpeechErrorEvent 
//   } from '@react-native-community/voice';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface ActionProps {
  displayClear: boolean,
  onPressVoice: () => void,
  onPressCancel: () => void,
  onPressClear: () => void,
}

export const Actions: React.FC<ActionProps> = ({ displayClear, onPressCancel, onPressClear, onPressVoice }) => {
  const [recording, setRecording] = useState<boolean>(false)
  const [speaking, setSpeaking] = useState<boolean>(true)

  const stopSpeaking = () => {
    setSpeaking(false)
  }

  // // VOICE HANDLERS
  // const speechStartHandler = (e: SpeechStartEvent) => {
  //   console.log('speech Start Handler')
  // }

  // const speechEndHandler = (e: SpeechEndEvent) => {
  //   setRecording(false)
  //   console.log('speech End Handler')
  // }

  // const speechResultsHandler = (e: SpeechResultsEvent) => {
  //   console.log('speech Result Handler', e)
  // }

  // const speechErrorHandler = (e: SpeechErrorEvent) => {
  //   console.log('speech error Handler', e)
  // }

  // useEffect(() => {
  //   // voice handler events
  //   Voice.onSpeechStart = speechStartHandler
  //   Voice.onSpeechEnd = speechEndHandler
  //   Voice.onSpeechResults = speechResultsHandler
  //   Voice.onSpeechError = speechErrorHandler;
  //   return () => {
  //     // destroy the voice instance
  //     Voice.destroy().then(Voice.removeAllListeners);
  //   }

  // }, [])

  const startRecording = async () => {
    setRecording(true)
    try {
      // await Voice.start('es-AR')
    } catch (error) {
      console.error('error: ', error)
    }
  }

  const stopRecording = async () => {
    try {
      // await Voice.stop()
      setRecording(false)

      // fetch response from ia

    } catch (error) {
      console.error('error: ', error)
    }
  }

  return (
    <View style={styles.container}>

      {recording ? (
        <TouchableOpacity onPress={stopRecording}>
          {/* Recording stop button */}
          <Image
            source={require('../../../assets/images/voiceLoading.gif')} style={styles.recordingBtn} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startRecording}>
          {/* Recording start button */}
          <Image
            source={require('../../../assets/images/recordingIcon.png')} style={styles.recordingBtn} />
        </TouchableOpacity>
      )}

      {displayClear && (
        <TouchableOpacity style={styles.clearContainer} onPress={() => onPressClear()}>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      )}

      {speaking && (
        <TouchableOpacity style={styles.stopContainer} onPress={() => stopSpeaking()}>
          <Text style={styles.clearBtn}>Stop</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30
  },
  recordingBtn: {
    width: hp(10),
    height: hp(10)
  },
  clearContainer: {
    backgroundColor: '#a6a6a6',
    borderRadius: 16,
    position: 'absolute',
    right: 10,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  clearBtn: {
    color: 'white',
    fontWeight: '400',
  },
  stopContainer: {
    backgroundColor: '#ff3232',
    borderRadius: 16,
    position: 'absolute',
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
});
