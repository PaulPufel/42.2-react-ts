import "./styles.ts";
import { InputProps } from './types'
import {InputContainer, InputElement, Label} from './styles';

function Input({ name, id, type = 'text', placeholder, label, value, onChange }: InputProps) {

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
