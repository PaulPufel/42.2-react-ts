import "./styles.css";
import type { InputProps } from "./types";

function Input({ id, name, type, placeholder, label }: InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
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
