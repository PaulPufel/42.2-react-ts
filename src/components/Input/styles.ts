import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 800px;
`;

export const Label = styled.label`
  font-size: 18px;
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  width: 800px;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 20px;
  background: whitesmoke;

  &::placeholder {
    color: #a19f9f;
  }
`;
