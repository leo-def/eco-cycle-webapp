import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { Alert } from '@mui/material';
import { MessageEnum } from '../../../enums/Action/Message.enum';
import { MessageVariantEnum } from '../../../enums/MessageVariant.enum';
import { RootState } from '../../../reducers';
import { Message as MessageType } from '../../../types/Message';
import './Message.css';

/**
 * Message
 *   Show app messages
 * @param {any}  props Properties
 * @return {React.Component} Message Component
 */
export const Message = () => {
  // const dispatch = useDispatch()
  const messages = useSelector((state: RootState) => state.message.messages || [])
  const getSeverity = (message: MessageType): 'error' | 'warning' | 'info' | 'success' => {
    switch(message.variant) {
      case MessageVariantEnum.ERROR :
        return 'error';
      case MessageVariantEnum.SUCCESS :
        return 'success';
      case MessageVariantEnum.WARNING :
        return 'warning';
      default:
        return 'info';
    }
  }
  const dispatch = useDispatch();
  const removeMessage = (payload: MessageType) => {
    dispatch({
      type: MessageEnum.REMOVE_MESSAGE,
      payload
    })
  }

  return (
    <React.Fragment>
      {messages.map((message: MessageType, index: number) => 
         <Alert
            key={index}
            className="alert-message"
            severity={getSeverity(message)}
            onClose={() => removeMessage(message)}>
            {message.message.toString()}
          </Alert>
      )}
    </React.Fragment>
  )
}
