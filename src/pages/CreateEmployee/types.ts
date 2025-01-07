export interface EmployeeFormValue {
  firstName: string
  lastName: string
  age?: string
  jobTitle: string
  agree?: boolean
}

export enum EMPLOYEE_FORM_NAMES {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AGE = "age",
  JOB_TITLE = "jobTitle",
  AGREEMENT = "agree",
}
 
