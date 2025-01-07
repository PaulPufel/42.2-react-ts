export interface Employee {
  firstName: string
  lastName: string
  age?: number
  jobTitle: string
  agreement: boolean
}

export interface EmployeeContextProps {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
}

