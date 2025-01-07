import { EmployeeAge, EmployeeCard, EmployeeFirstName, EmployeeJob, EmployeeLastName, EmployeeList } from "./styles";

function Employee() {

  return (
    <EmployeeList>
        <EmployeeCard>  
          <EmployeeFirstName>First Name: </EmployeeFirstName>
          <EmployeeLastName>Last Name: </EmployeeLastName>
          <EmployeeAge>Age: </EmployeeAge>
          <EmployeeJob>Job Title: </EmployeeJob>
        </EmployeeCard>
    </EmployeeList>
  )
}

export default Employee;


// import React from "react";
// import { useEmployeeContext } from "../../components/EmployeeContext/EmployeeContext";
// import { EmployeeAge, EmployeeCard, EmployeeFirstName, EmployeeJob, EmployeeLastName, EmployeeList } from "./styles";

// function Employee() {
//   const { employees } = useEmployeeContext(); 

//   return (
//     <EmployeeList>
//       {employees.map((employee, index) => (
//         <EmployeeCard key={index}>
//           <EmployeeFirstName><strong>First Name:</strong> {employee.firstName}</EmployeeFirstName>
//           <EmployeeLastName><strong>Last Name:</strong> {employee.lastName}</EmployeeLastName>
//           <EmployeeAge><strong>Age:</strong> {employee.age}</EmployeeAge>
//           <EmployeeJob><strong>Job Title:</strong> {employee.jobTitle}</EmployeeJob>
//         </EmployeeCard>
//       ))}
//     </EmployeeList>
//   );
// }

// export default Employee;
