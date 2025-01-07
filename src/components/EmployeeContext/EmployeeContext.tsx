import React, { createContext, useState, useContext } from "react";
import { Employee, EmployeeContextProps } from "./types";

const EmployeeContext = createContext<EmployeeContextProps | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployeeContext must be used within an EmployeeProvider");
  }
  return context;
}
