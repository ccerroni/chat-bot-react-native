import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RoleEnum, type Message } from '../../types';

interface MessageListProps {
  messages: Message[]
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assistant</Text>

      <View style={styles.chatContainer}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          {
            messages.map((message: Message, index: number) => {
              if (message.role === RoleEnum.assistant) {
                if (message.content.includes('http')) {
                  // image assistance response
                  return (
                    <View style={styles.chatAssistantContainer} key={`${message.role}-image-${index}`}>
                      <View style={styles.chatMessageAssistant}>
                        <Image source={{ uri: message.content }} style={styles.chatImageMessage} />
                      </View>
                    </View>
                  )
                }
                else {
                  // text assistance response
                  return (
                    <View key={`${message.role}-${index}`} style={styles.chatAssistantContainer}>
                      <View style={styles.chatMessageAssistant}>
                        <Text style={styles.text}>{message.content}</Text>
                      </View>
                    </View>
                  )
                }


              }
              else {
                // user message
                return (
                  <View style={styles.chatMessageUser} key={`${message.role}-${index}`}>
                    <Text style={styles.text}>{message.content}</Text>
                  </View>
                )
              }

            })
          }
        </ScrollView>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: hp(60),
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  title: {
    fontSize: wp(5),
    color: '#262626',
  },
  text: {
    fontSize: wp(3.8),
    color: '#262626',
  },


  chatContainer: {
    height: hp(58),
    backgroundColor: '#d8d8d8',
    borderRadius: 12,
    padding: 8
  },
  chatAssistantContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  chatMessageAssistant: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    borderTopRightRadius: 0,
    marginTop: 12
  },

  chatMessageUser: {
    width: wp(70),
    marginTop: 12,
    backgroundColor: '#b2d8b2',
    borderRadius: 12,
    padding: 12,
    borderBottomLeftRadius: 0,

  },
  chatImageMessage: {
    borderRadius: 12,
    resizeMode: 'contain',
    height: hp(40),
    width: hp(40),
  }

});
