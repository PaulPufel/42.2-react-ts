import "./styles.css";
import {InputProps} from "./types";

function Input({ id, name, type = 'text', placeholder, label }: InputProps) {
  return (
    <div className="input-container">
      {/* Пример оператора условного рендеринга */}
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </div>
  );
}

export default Input;
