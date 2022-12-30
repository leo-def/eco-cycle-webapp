import { MessageEnum } from '../enums/Action/Message.enum';
import { Message } from '../types/Message';

export class MessageState {
  messages: Array<Message> = [];
}

export const initialState: any = {
  messages: []
};

export default function reduce(state = initialState, action: any) {
  const message = action.payload as Message;
  switch (action.type) {
    case MessageEnum.ADD_MESSAGE: {
      return {
        messages: [
          ...state.messages,
          message
        ]
      }
    }
    case MessageEnum.REMOVE_MESSAGE:
      return {
        messages: (state.messages || []).filter((item: Message) => message.id !== item.id)
      }
    default:
      return state
  }
}
