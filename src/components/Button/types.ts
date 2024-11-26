type ButtonProps = {
    name: string;
    type?: "button" | "submit" | "reset"; 
    onClick: () => void;
  }
  
 export type {ButtonProps};