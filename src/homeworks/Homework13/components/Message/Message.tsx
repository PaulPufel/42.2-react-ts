import { useContext } from 'react'
import { MailBox, MessageContainer } from './styles';
import { MessagePost } from '../BlogManagement/BlogManagement';
import Button from 'components/Button/Button';

function Message() {
  const { message, onPostChange } = useContext(MessagePost);

  const onDeleteMessage = () => {
    onPostChange('')
  }
  
  return (
    <MessageContainer>
      <MailBox>{message}</MailBox>
      <Button name='Delete' onClick={onDeleteMessage} />
    </MessageContainer>
  )
}

export default Message;
