import axios from 'axios'
import { apiKey } from '../config/config'
import { Message, RoleEnum } from '../types';

const client = axios.create(
  {headers: {
    'Authorization': `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  }}
)
const chatGptEndpoint = 'https://api.openai.com/v1/chat/completions'
const dalleEndpoint = 'https://api.openai.com/v1/images/generations';

export const apiCall = async(prompt: string, messages: Message[]) => {
  try {
    const res = await client.post(chatGptEndpoint, {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          role: RoleEnum.user,
          content: `Does this message want to generate an AI picture, image, art or anything similar? ${prompt}, Simply answer with a yes or no.`
        }        
      ]
    })
    const isArt = res.data?.choices[0]?.message?.content
    if(isArt.toLoweCase().includes('yes')) {
      // call dall-e
      return dalleApiCall(prompt, messages || [])
    } else {
      // call ChatGPT
      return chatGptCall(prompt, messages || [])
    }

  } catch (error: any) {
    console.error(error)
  }
}

const chatGptCall = async (prompt: string, messages: Message[]) => {
  try {
    const res = await client.post(chatGptEndpoint, {
      role: RoleEnum.user,
      messages
    })
    const answer = res.data?.choices[0]?.message?.content
    messages.push({
      role: RoleEnum.assistant,
      content: answer.trim()
    })

    return Promise.resolve({success: true, data: messages})

  } catch (error) {
    console.error(error)    
  }
}


const dalleApiCall = async (prompt: string, messages: Message[]) => {
  try {
    const res = await client.post(dalleEndpoint, {
      "prompt": prompt,
      "n": 2,
      "size": "1024x1024"
    })

    
    const url = res?.data?.data[0]?.urlr
    messages.push({
      role: RoleEnum.assistant,
      content: url
    })

    return Promise.resolve({success: true, data: messages})

  } catch (error) {
    console.error(error)    
  }
}