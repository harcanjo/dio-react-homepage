import React, { MouseEventHandler } from 'react';

import './Button.css';

interface ButtonProps {
  onClick: MouseEventHandler;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick} className="button">{children}</button>;
};

export default Button;