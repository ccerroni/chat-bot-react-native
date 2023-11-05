export enum RoleEnum {
  user = 'user',
  assistant = 'assistant'
}

export type Message = {
  role: RoleEnum,
  content: string
}