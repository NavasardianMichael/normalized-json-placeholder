import { MessageCreateParams } from 'openai/resources/beta/threads/messages.mjs'
import { Chat, ChatsSlice, Message } from 'store/posts/types'

export const ROLES: Record<MessageCreateParams['role'], MessageCreateParams['role']> = {
  assistant: 'assistant',
  user: 'user',
} as const

export const TEMP_MESSAGE: Message = {
  id: 'message-temp-id',
  role: ROLES.assistant,
  value: 'What are you looking to accomplish? Ask me a question and I will do my best to provide a meaningful answer.',
}

export const TEMP_CHAT: Chat = {
  id: 'temp-id-1',
  title: TEMP_MESSAGE.value,
  updatedDate: Date.now() / 1000, // TODO: For making seconds
  isTemp: true,
  isPromptPending: false,
  messages: [],
}

export const TEMP_CHATS_LIST: ChatsSlice['list'] = {
  byId: {
    [TEMP_CHAT.id]: TEMP_CHAT,
  },
  allIds: [TEMP_CHAT.id],
}
