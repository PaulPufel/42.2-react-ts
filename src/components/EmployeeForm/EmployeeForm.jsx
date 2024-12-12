import { useFormik } from "formik"; 
import * as Yup from 'yup';
import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormWrapper, EmployeeFormTitle, InputsContainer } from './styles';
import { EmployeeFormValue, LOGIN_FORM_NAMES } from "./types";

function EmployeeForm() {
  const nameRegx = /^[a-zA-Z]+$/;
  const schema = Yup.object().shape({

    [LOGIN_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required('Field first_name is required')
      .test(
        "Check symbol length",
        "Min 2 and Max 50 symbols",
        (value) => value ? value.length >= 2 && value.length <= 50 : false
      )
      .matches(nameRegx, "The letters must be in Latin"),

    [LOGIN_FORM_NAMES.LAST_NAME]: Yup.string()
      .required('Field last_name is required')
      .max(15, "Max 15 symbols")
      .matches(nameRegx, "The letters must be in Latin"),

    [LOGIN_FORM_NAMES.AGE]: Yup.number()
      .typeError('Age must be a number')
      .min(18, 'Minimum age is 18')
      .max(80, 'Maximum age is 80'),

    [LOGIN_FORM_NAMES.JOB_TITLE]: Yup.string()
      .required("Field job_title is required")
      .max(30, "Max 30 symbols")
      .matches(nameRegx, "The letters must be in Latin")
  });

  // Настройка формы через useFormik
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.FIRST_NAME]: '',
      [LOGIN_FORM_NAMES.LAST_NAME]: '',
      [LOGIN_FORM_NAMES.AGE]: '',
      [LOGIN_FORM_NAMES.JOB_TITLE]: '',
    } as EmployeeFormValue,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValue) => {
      console.log(values);
    }
  });

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <EmployeeFormTitle>Employee Form</EmployeeFormTitle>
      <InputsContainer>
        <Input 
          name={LOGIN_FORM_NAMES.FIRST_NAME} 
          id="first_name"
          placeholder="Your first name"
          label="First name"
          value={formik.values[LOGIN_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={LOGIN_FORM_NAMES.LAST_NAME}
          id="last_name"
          placeholder="Enter your last name"
          label="Last name"
          value={formik.values[LOGIN_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.LAST_NAME]}
        />
        <Input 
          name={LOGIN_FORM_NAMES.AGE} 
          id="age"
          placeholder="Your age"
          label="Age"
          value={formik.values[LOGIN_FORM_NAMES.AGE]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.AGE]}
        />
        <Input
          name={LOGIN_FORM_NAMES.JOB_TITLE}
          id="job_title"
          placeholder="Enter your job title"
          label="Job Title"
          value={formik.values[LOGIN_FORM_NAMES.JOB_TITLE]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.JOB_TITLE]}
        />
      </InputsContainer>
      <Button name="Submit" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
