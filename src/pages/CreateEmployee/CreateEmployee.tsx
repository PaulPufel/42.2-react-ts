import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormWrapper } from "./styles";
import { EmployeeFormValue, EMPLOYEE_FORM_NAMES } from "./types";

function CreateEmployee() {
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required("Field first Name is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required("Field last Name is required")
      .max(15, "Max 15 symbols"),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .typeError("Age must be a number")
      .min(18, "Minimum age is 18")
      .max(80, "Maximum age is 80")
      .transform((value) => (value === "" ? undefined : Number(value))),
    [EMPLOYEE_FORM_NAMES.JOB_TITLE]: Yup.string()
      .required("Field job Title is required")
      .max(30, "Max 30 symbols"),
    [EMPLOYEE_FORM_NAMES.AGREEMENT]: Yup.boolean().oneOf([true],
      "You must accept the agreement"),
  });

  function addEmployee(values: EmployeeFormValue) {
    throw new Error("Function not implemented.");
  }
  
  const formik = useFormik<EmployeeFormValue>({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.JOB_TITLE]: "",
      [EMPLOYEE_FORM_NAMES.AGREEMENT]: false,
    },

    validationSchema,
      validateOnChange: false,
      onSubmit: (values) => {
      addEmployee(values); // Добавляем сотрудника в контекст
      formik.resetForm(); 
    },
  });

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
        id="first_name"
        placeholder="Your first Name"
        label="First Name*"
        value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_NAMES.LAST_NAME}
        id="last_name"
        placeholder="Enter your last Name"
        label="Last Name*"
        value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_NAMES.AGE}
        id="age"
        placeholder="Your age"
        label="Age"
        value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
      />
      <Input
        name={EMPLOYEE_FORM_NAMES.JOB_TITLE}
        id="job_title"
        placeholder="Enter your job Title"
        label="Job Title*"
        value={formik.values[EMPLOYEE_FORM_NAMES.JOB_TITLE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.JOB_TITLE]}
      />
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          id="agree_id"
          name={EMPLOYEE_FORM_NAMES.AGREEMENT}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FORM_NAMES.AGREEMENT]}
        />
        <CheckboxLabel htmlFor="agree_id">I Agree</CheckboxLabel>
      </CheckboxContainer>
      <Button
        name="Create"
        type="submit"
        disabled={!formik.isValid || !formik.values[EMPLOYEE_FORM_NAMES.AGREEMENT]}
      />
    </EmployeeFormWrapper>
  );
}

export default CreateEmployee;
