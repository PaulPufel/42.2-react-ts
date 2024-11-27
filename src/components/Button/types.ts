export interface ButtonProps {
  name: string;
  type?: "button" | "submit" | "reset"; 
  onClick?: () => void;
}

// 2 Способ
// type ButtonType = "button" | 'submit' | "reset";

// export interface ButtonProps {
//   name: string;
//   type?: ButtonType;
//   onClick?: () => void;
// }
