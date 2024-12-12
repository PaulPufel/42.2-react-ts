import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
   
   &:hover {
    background-color: #f7e8be;
   }
`;

export const EmployeeFormTitle = styled.div`
   font-size: 24px;
   font-weight: bold;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;
