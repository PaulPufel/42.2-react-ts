export interface InputProps { 
    id?: string;
    name: string;
    type?: 'text' | 'email' | 'password' | 'tel'; 
    placeholder?: string;
    label?: string;
  }