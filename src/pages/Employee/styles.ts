import styled from "@emotion/styled";

export const EmployeeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 15px;
  margin: 20px;
`

export const EmployeeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 380px;
  margin: 30px;
  gap: 55px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 4px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  background: white;
`

export const EmployeeFirstName = styled.p`
  font-size: 15px;
`

export const EmployeeLastName = styled.p`
  font-size: 15px;
`

export const EmployeeAge = styled.p`
  font-size: 15px;
`
export const EmployeeJob = styled.p`
  font-size: 15px;
`