import styled from "@emotion/styled";

export const Component = styled.div`
  font-family: Arial, sans-serif;
  background: whitesmoke;
  padding: 20px;
`; 

export const DataContainer = styled.div`
  width: 100%;
  max-height: 700px;
  overflow-y: auto; /* Добавляем скролл */
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background: #dbcfcf;
  margin-bottom: 20px;
`; 
   
export const DataBox = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  background: beige;
   
  data-item:last-child {
  border-bottom: none;
 }
`;
     
export const PageName = styled.h2`
  font-size: 24px;
  color: magenta;
`;

export const Page = styled.p`
  font-size: 18px;
  color: blue;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;
  
export const Button = styled.button`
  padding: 10px 15px;
  background-color: #185cfa;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
  }

  button:hover:not(:disabled) {
  background-color: #3f4bcf;
  }
`;  
 