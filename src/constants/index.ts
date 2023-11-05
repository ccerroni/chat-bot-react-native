import { RoleEnum, type Message } from "../types";

export const dummyMessages: Message[] = [
  {
    role: RoleEnum.user,
    content: 'How are you?'
  },
  {
    role: RoleEnum.assistant,
    content: "I 'm fine, How may i help you today,"
  },
  {
    role: RoleEnum.user,
    content: 'create an image of a cat with a butty'

  },
  {
    role: RoleEnum.assistant,
    content: 'https://storage.googleapis.com/pai-images/c92c031a0c6f42e79f482c18c6e47a94.jpeg'
  }
]


