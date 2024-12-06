import styled from "@emotion/styled";

export const Homework09Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
  padding: 100px;
  background: wheat;
`

export const HomeworkTitle = styled.h2`
font-size: 30px;
 color: violet;
`
export const DogImg = styled.img`
 width: 250px;
 height: 250px;
 border-radius: 50%;
`
export const ErrorMessage = styled.div`
 color: red;
`
export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid black;
  background: greenyellow;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #6200ea;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;