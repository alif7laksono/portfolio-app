// Button.tsx
import React from "react";
import "./styles.css";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className="btn">{children}</button>;
};

export default Button;
