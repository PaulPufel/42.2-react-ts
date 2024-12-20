import { ChangeEvent, useState, createContext } from 'react';
import { BlogManagerContainer, TextArea, ButtonContainer } from './styles';
import Button from 'components/Button/Button';
import Card from '../Card/Card';
import { MessagePostContext } from './types';

export const MessagePost = createContext<MessagePostContext>({
  message: '',
  onPostChange: () => { }
});


function BlogManagement() {
  const [textArea, setTextArea] = useState<string>('');
  const [post, setPost] = useState<string>('');
  console.log(post);

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };

  const onPost = () => {
    setPost(textArea);
    setTextArea('')
  };

  return (
    <MessagePost.Provider value={{
      message: post,
      onPostChange: setPost
    }}>
      <BlogManagerContainer>
        <TextArea 
           value={textArea} 
           onChange={onChangeTextArea} 
           placeholder="Write your message here..."/>
        <ButtonContainer>
          <Button name="POST" onClick={onPost} />
        </ButtonContainer>
        {post && <Card />}
      </BlogManagerContainer>
    </MessagePost.Provider>
  );
}

export default BlogManagement;
